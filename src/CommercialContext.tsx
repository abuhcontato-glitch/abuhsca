import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { normalizeQuantity, type PlanId, type Quantities } from './commercial';

const CommercialContext=createContext<{
 plan:PlanId;selectPlan:(plan:PlanId)=>void;quantities:Quantities;
 setQuantity:(id:string,quantity:number)=>void;clear:()=>void;
}|null>(null);
const routePlan=(path:string):PlanId|null => path.match(/\/(sprint|tracao|maratona)$/)?.[1] as PlanId ?? null;
export function CommercialProvider({children}:{children:ReactNode}) {
 const {pathname}=useLocation(),navigate=useNavigate();
 const [plan,setPlan]=useState<PlanId>(routePlan(pathname)??'maratona');
 const [selections,setSelections]=useState<Record<PlanId,Quantities>>({sprint:{},tracao:{},maratona:{}});
 useEffect(()=>{const selected=routePlan(pathname);if(selected)setPlan(selected);},[pathname]);
 const activePlan=routePlan(pathname)??plan;
 const selectPlan=(selected:PlanId)=>{setPlan(selected);if(routePlan(pathname))navigate(`/construcel/${pathname.includes('/contratacao/')?'contratacao/':''}${selected}`);};
 const setQuantity=(id:string,quantity:number)=>setSelections(previous=>({...previous,[activePlan]:{...previous[activePlan],[id]:normalizeQuantity(quantity)}}));
 return <CommercialContext.Provider value={{plan:activePlan,selectPlan,quantities:selections[activePlan],setQuantity,clear:()=>setSelections(previous=>({...previous,[activePlan]:{}}))}}>{children}</CommercialContext.Provider>;
}
export function useCommercial(){const state=useContext(CommercialContext);if(!state)throw new Error('CommercialProvider ausente');return state;}
