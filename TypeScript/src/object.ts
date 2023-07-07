let employee:{readonly id: number,//no able to change 
     name: string
     retire:(date: Date) => void
}= {id:1, 
    name:'mosh',
    retire:(date: Date) =>{
        console.log(date)
    }
};

