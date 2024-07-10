import { NextResponse } from "next/server";

export async function DELETE(req: Request, {params}: {params: {id: string}}) {
    const id = params.id;

    // logic delete course

    return NextResponse.json({ id })
}