import React from 'react'

export const Checkbox = React.forwardRef(({indeterminate,...rest},ref)=>{
    const defaultRef = React.useRef()
    console.log('defaultRef',defaultRef);
    const resolvedRef = ref || defaultRef
    console.log('resolvedRef',resolvedRef);
    console.log('indeterminate',indeterminate);
    React.useEffect(()=>{
        resolvedRef.current.indeterminate = indeterminate
        console.log('resolvedRef',resolvedRef);
    },[resolvedRef,indeterminate])
    return (
        <>
        <input type="checkbox" ref={resolvedRef} {...rest}/>
        </>
    )
})