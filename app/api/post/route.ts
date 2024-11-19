import { NextResponse } from "next/server";
import prisma from "../../../lib/prismaClient";

export async function GET() {
    const allBBSPosts = await prisma.post.findMany();
    return NextResponse.json(allBBSPosts);
};

export async function POST(request: Request) {
    const { username, title, content } = await request.json();

    const post = await prisma.post.create({
        data: {
            username, 
            title, 
            content,
        }
    });
    return NextResponse.json(post);
};


