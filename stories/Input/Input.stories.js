import React from 'react'
import Input from './Input'

export default {
    title: "Form/Input",
    component:Input

}


export const SmallInput = ()=><Input size="small" placeholder="Small Input" />
export const MediumInput = ()=><Input size="medium" placeholder="Medium Input" />
export const LargInput = ()=><Input size="large" placeholder="Large Input" />
