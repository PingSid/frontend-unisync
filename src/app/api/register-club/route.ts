import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const body = await req.json();
    const { clubName, description, student, faculty } = body;

    // ---------------- VALIDATION ----------------

    if (
      !clubName ||
      !description ||
      !student?.name ||
      !student?.designation ||
      !student?.branch ||
      !student?.phone ||
      !student?.usn ||
      !faculty?.name ||
      !faculty?.branch ||
      !faculty?.phone
    ) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Phone must be exactly 10 digits
    const phoneRegex = /^\d{10}$/;

    if (!phoneRegex.test(student.phone) || !phoneRegex.test(faculty.phone)) {
      return NextResponse.json(
        { error: "Phone number must be exactly 10 digits." },
        { status: 400 }
      );
    }

    // USN must be alphanumeric
    const usnRegex = /^[A-Za-z0-9]+$/;

    if (!usnRegex.test(student.usn)) {
      return NextResponse.json(
        { error: "USN must contain only letters and numbers." },
        { status: 400 }
      );
    }

    // ---------------- INSERT CLUB ----------------

    const { data: club, error: clubError } = await supabase
      .from("clubs")
      .insert([{ name: clubName, description }])
      .select()
      .single();

    if (clubError) throw clubError;

    // ---------------- INSERT STUDENT ----------------

    const { data: studentProfile, error: studentError } =
      await supabase
        .from("profiles")
        .insert([
          {
            name: student.name,
            branch: student.branch,
            phone: student.phone,
            usn: student.usn,
            type: "student",
          },
        ])
        .select()
        .single();

    if (studentError) throw studentError;

    // ---------------- INSERT FACULTY ----------------

    const { data: facultyProfile, error: facultyError } =
      await supabase
        .from("profiles")
        .insert([
          {
            name: faculty.name,
            branch: faculty.branch,
            phone: faculty.phone,
            type: "faculty",
          },
        ])
        .select()
        .single();

    if (facultyError) throw facultyError;

    // ---------------- LINK MEMBERS ----------------

    const { error: linkError } = await supabase
      .from("club_members")
      .insert([
        {
          club_id: club.id,
          profile_id: studentProfile.id,
          designation: student.designation,
        },
        {
          club_id: club.id,
          profile_id: facultyProfile.id,
          designation: "Faculty Coordinator",
        },
      ]);

    if (linkError) throw linkError;

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Registration failed." },
      { status: 500 }
    );
  }
}