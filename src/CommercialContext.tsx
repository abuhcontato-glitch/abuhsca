import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { normalizeQuantity, type PlanId, type Quantities } from './commercial';

const CommercialContext=createContext<{
 plan:PlanId;selectPlan:(plan:PlanId)=>void;quantities:Quantities;
 setQuantity:(id:string,quantity:number)=>void;clear:()=>void;
}|null>(null);
export function CommercialProvider({children}:{children:ReactNode}) {
 const {pathname}=useLocation();
 const [plan,setPlan]=useState<PlanId>(pathname.includes('sprint')?'sprint':'maratona');
 // Each plan keeps its explicitly selected EXTRA quantities, never its included allowance.
 const [selections,setSelections]=useState<Record<PlanId,Quantities>>({sprint:{},maratona:{}});
 useEffect(()=>{if(pathname.includes('sprint'))setPlan('sprint');else if(pathname.endsWith('/contratacao/maratona'))setPlan('maratona');},[pathname]);
 const setQuantity=(id:string,quantity:number)=>setSelections(previous=>({...previous,[plan]:{...previous[plan],[id]:normalizeQuantity(quantity)}}));
 return <CommercialContext.Provider value={{plan,selectPlan:setPlan,quantities:selections[plan],setQuantity,clear:()=>setSelections(previous=>({...previous,[plan]:{}}))}}>{children}</CommercialContext.Provider>;
}
export function useCommercial(){const state=useContext(CommercialContext);if(!state)throw new Error('CommercialProvider ausente');return state;}
