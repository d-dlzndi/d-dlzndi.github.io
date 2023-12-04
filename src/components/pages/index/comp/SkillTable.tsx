"use client";

export type skillType = { name: React.ReactNode; progress: number };

export const testSkill: skillType[] = [
  { name: "Maya", progress: 80 },
  { name: "Unreal Engine 5", progress: 50 },
  { name: "Photoshop", progress: 50 },
];

export const defaultColors = [
  "progress",
  "progress-primary",
  "progress-secondary",
  "progress-accent",
  "progress-info",
  "progress-success",
  "progress-warning",
  "progress-error",
];

export function SkillTable({
  skills,
  headUse = false,
  colors = defaultColors,
}: {
  skills?: skillType[];
  headUse?: boolean;
  colors?: string[];
}) {
  if (!skills) skills = testSkill;
  return (
    <div className="overflow-x-auto">
      <table className="table border-t border-b">
        {headUse && (
          <thead>
            <tr>
              <th></th>
              <th>프로그램</th>
              <th>숙련도</th>
            </tr>
          </thead>
        )}
        <tbody>
          {/* row 1 */}
          {skills.map((skill, idx) => (
            <tr key={skill.name + "_" + idx} className="text-lg">
              {/** <th>{String(idx + 1).padStart(2, "0")}</th> */}
              <td>{skill.name}</td>
              <td className="w-1/2">
                <progress
                  className={`progress w-full ${colors[idx % colors.length]}`}
                  value={skill.progress}
                  max="100"
                ></progress>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
