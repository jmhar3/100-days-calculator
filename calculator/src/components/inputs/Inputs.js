import {NumberInput} from "./NumberInput";
import {ActionInput} from "./ActionInput";

export const Inputs = () => {
 return (
  <div id="inputs">
   <NumberInput number={7}/>
   <NumberInput number={8}/>
   <NumberInput number={9}/>
   <button>DEL</button>
   <NumberInput number={4}/>
   <NumberInput number={5}/>
   <NumberInput number={6}/>
   <ActionInput action="+"/>
   <NumberInput number={1}/>
   <NumberInput number={2}/>
   <NumberInput number={3}/>
   <ActionInput action="-"/>
   <ActionInput action="."/>
   <NumberInput number={0}/>
   <ActionInput action="/"/>
   <ActionInput action="x"/>
   <button>RESET</button>
   <button>=</button>
  </div>
 )
} 