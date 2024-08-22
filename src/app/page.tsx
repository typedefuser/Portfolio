import Image from "next/image";



export default function Home() {
  return (
    <main className="max-w-2xl mx-auto items-center justify-between p-2">
       <header className="mb-4">
            <h1 className="text-2xl text-green-600 font-bold">typedefuser@portfolio</h1>
            <p className="text-blue-400">~$ whoami</p>
            <p className="ml-4">Hello, I am Nikhilesh Majhi. I am an undergraduate student pursuing a B.Tech in CSE.
                </p>
        </header>
        <section className="mb-4 border-b border-green-600 pb-4 pl-4"> 
            <p>Email: <a href="mailto:john.doe@example.com" className="text-green-600">majhinikhilesh23@gmail.com</a></p>
            <div className="flex space-x-4 mt-2">
                <a href="https://github.com/typedefuser" target="_blank" className="flex items-center">
                    <i className="fab fa-github fa-2x" style={{color: '#6CC24A'}}/>
                    <span className="ml-2">GitHub</span>
                </a>
                <a href="https://leetcode.com/u/nikhileshmajhi/" target="_blank" className="flex items-center">
                    <img width="30" height="30" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo.png" alt="LeetCode" />
                    <span className="ml-2">LeetCode</span>
                </a>
                <a href="https://codeforces.com/profile/watidoink" target="_blank" className="flex items-center">
                    <img width="30" height="30" src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/24/external-codeforces-programming-competitions-and-contests-programming-community-logo-filled-tal-revivo.png" alt="Codeforces" />
                    <span className="ml-2">Codeforces</span>
                </a>
            </div>
        </section>
    </main>
  );
}
