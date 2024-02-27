"use server"

import prisma from "@/lib/db"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function fetchCategories() {
    const categories = await prisma.membro.findMany({
        select: {
            id: true,
            name: true,
            cargo: true,
            email: true,
            published: true
        },
        orderBy: {
            id:"asc",
        },
    });

    const count = await prisma.membro.count();

    return { categories, count };
}

export async function fetchMembers() {
    const membersCategory = await prisma.membro.findMany({
        select: {
            id: true,
            name: true,
            cargo: true,
            email: true,
            published: true
        },
        orderBy: {
            name:"asc",
        },
    });

    const count = await prisma.membro.count();

    return { membersCategory, count };
}

export async function fetchMemberById(id: number | undefined) {
    const category = await prisma.membro.findUnique({
        where: {id},
        select: {
            id: true,
            name: true,
            cargo: true,
            email: true,
            published: true
        },
    });

    return category;
}


export async function deleteMember(id: number | undefined) {
    await prisma.membro.delete({
        where: { id },
    });

    redirect("/admin")
}

export async function createMember(formData: FormData) {
    const name = formData.get("name") as string;
    const cargo = formData.get("cargo") as string;
    const email = formData.get("email") as string;
    const published = true;

    await prisma.membro.create({
        data: {
            name, cargo, email, published
        },
    });

    redirect("/admin")
}

export async function editMember(id: number | undefined, formData: FormData) {
    const name = formData.get("name") as string;
    const cargo = formData.get("cargo") as string;
    const email = formData.get("email") as string;

    await prisma.membro.update({
        where: {id},
        data: {
            name, cargo, email
        },
    });

    redirect("/admin")

}
