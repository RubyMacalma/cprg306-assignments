import Link from "next/link";


export default function Home() {
  let mainStyle ="flex min-h-screen flex-col items-center justify-between p-24"
  let divStyle ="z-10 max-w-5xl w-full items-center justify-between text-sm"
  let h1Style = "text-4xl font-bold mb-5";
  let div2Style ="text-lg"
  let liStyle = " hover:text-yellow-400";
 
  return (
      <main class={mainStyle}>
        <div class={divStyle}>
        <h1 class={h1Style}> CPRG306: Web Development 2 - Assignments </h1>
        <div class= {div2Style}>
        <ul>
          <li class={liStyle}>
            <Link href="week-2">Week 2 Assignment</Link>
          </li>
          <li class={liStyle}>
            <Link href="week-3">Week 3 Assignment</Link>
          </li>
          <li class={liStyle}>
            <Link href="week-4">Week 4 Assignment</Link>
          </li>
          <li class={liStyle}>
            <Link href="week-5">Week 5 Assignment</Link>
          </li>
          <li class={liStyle}>
            <Link href="week-6">Week 6 Assignment</Link>
          </li>
          <li class={liStyle}>
            <Link href="week-7">Week 7 Assignment</Link>
          </li>
          <li class={liStyle}>
            <Link href="week-8">Week 8 Assignment</Link>
          </li>
          <li class={liStyle}>
            <Link href="week-9">Week 9 Assignment</Link>
          </li>
          <li class={liStyle}>
            <Link href="week-10">Week 10 Assignment</Link>
          </li>
        </ul>
        </div>
        </div>
      </main>
   
   
   
  );
}

