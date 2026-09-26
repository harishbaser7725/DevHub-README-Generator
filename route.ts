
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { projectName, description } = await request.json();

    if (!projectName || !description) {
      return NextResponse.json(
        { error: "Project name and description are required." },
        { status: 400 }
      );
    }

    const readme = `# ${projectName}

## Description

${description}

## Features

- Easy to use
- Modern developer project
- AI-powered README generation

## Technologies

- Next.js
- TypeScript
- React

## Installation

\`\`\`bash
npm install
npm run dev
\`\`\`

## Author

Harish Baser
`;

    return NextResponse.json({ readme });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
