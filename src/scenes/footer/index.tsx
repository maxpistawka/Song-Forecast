

import githublogo from "@/assets/githublogo.png";

import linkedinlogo from "@/assets/linkedinlogo.png";


const Footer = () => {
  return (
    <footer className=" bg-slate-400 py-4  ">
        <div className = "flex justify-center gap-12">
       
          <div >
            <a target="_blank" href="https://www.linkedin.com/in/maxpistawka"><img src={linkedinlogo} className="h-30 w-20" alt="Five cats looking around a field." /></a>
          </div>
        
        <div >
          <p className="my-2 mx-1 text-slate-800">  Developed By:</p>
          <h4 className="font-bold text-black text-lg"> Max Pistawka </h4>
        </div>
        <div >
          <a target="_blank" href="https://github.com/maxpistawka"><img src={githublogo} className="h-30 w-20" alt="Five cats looking around a field." /></a>
        </div>
        </div>
    </footer>
  );
};

export default Footer;