function kgToLbs(weight: number | string): number {
    //narrowing
    if(typeof weight === 'number')
       return weight * 2.2;
    else
       return parseInt(weight) * 2.2;
    
}

kgToLbs(10);
kgToLbs('10kg');

//intersection
type Draggable={
    drag:()=> void
}
type Resizable ={
    resize: () => void
}
type UIWidget = Draggable & Resizable;
let textBox: UIWidget={
    drag: ()=>{},
    resize:()=>{}
}