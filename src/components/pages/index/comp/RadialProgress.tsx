"use client";
import { skillType } from "../comp/SkillTable";

export function RadialProgress({
  skills,
  colors,
  progressTextUse,
}: {
  skills: skillType[];
  colors?: string[];
  progressTextUse?: boolean;
}) {
  const col = colors || ["text-secondary", "text-accent", "text-neutral"];

  return skills.map((skill, idx) => (
    <div
      key={idx}
      className={
        "radial-progress -m-6 scale-75 md:scale-100 md:m-0 " +
        col[idx % col.length]
      }
      style={{
        //@ts-ignore
        "--value": skill.progress,
        "--size": "12rem",
        "--thickness": "1rem",
      }}
      role="progressbar"
    >
      <p className="text-center px-8 pt-1 text-base-100">
        <span className=" font-bold text-xl">{skill.name}</span>
        {progressTextUse && (
          <>
            <br />
            {skill.progress + "%"}
          </>
        )}
      </p>
    </div>
  ));
}
