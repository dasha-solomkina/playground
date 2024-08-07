import { PropsWithChildren } from 'react';

type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (id: number) => void;
}>;

export default function CourseGoal({
  title,
  id,
  children,
  onDelete,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <button onClick={() => onDelete(id)}>delete</button>
    </article>
  );
}

// other ways
// type CourseGoalProps = {
//   title: string;
//   //   description: string;
//   children: ReactNode;
// };

// interface CourseGoalProps = {
//     title: string;
//     description: string;
// };
