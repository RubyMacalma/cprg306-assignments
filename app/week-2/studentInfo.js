import Link from "next/link";


export default function StudentInfo(){
  let linkStyle = "hover:text-yellow-400";
  return (
        <div>
        <p>Ruben Macalma</p>
        <Link class={linkStyle} href="https://github.com/RubyMacalma/cprg306-assignments">Rubens cprg306-assignments </Link>
         </div>
    );
  }
