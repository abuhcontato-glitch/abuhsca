import { ArrowUpRight } from 'lucide-react';

export function SectionTape({client="CONSTRUCEL"}:{client?:string}) {
 return <div className="tape-outer tape-crossed" aria-hidden="true">
  {['yellow','blue'].map(color=><div className={`tape tape-${color}`} key={color}>
   {Array.from({length:6},(_,i)=><span key={i}>ABUHSCA × {client} <span className="tape-star">✳</span> DO BRANDING À PERFORMANCE <ArrowUpRight size={23}/></span>)}
  </div>)}
 </div>;
}
