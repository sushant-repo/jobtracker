import { useEffect, useRef } from "react"

export default function Form({onSubmit, onAbort, children}){
    const formRef = useRef(null);

    useEffect(() => {
        const form  = formRef.current;
        form.classList.remove("was-validated");
    },[]);

    function handleSubmit(e){
        e.preventDefault();

        const form = formRef.current;

        if(form.checkValidity() === false){
            e.stopPropagation();
            form.classList.add("was-validated");
        }else{
            form.classList.remove("was-validated");
            onSubmit();
        }
    }

    return <form onSubmit={handleSubmit} onAbort={onAbort} noValidate ref={formRef}>
        {children}
    </form>
}