import React from 'react'
import { Button } from '../ui/button'
import {  Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const ButtonLogin = ({type,text,loading,onclick,className}) => {
  return (
   <Button type={type} disabled={loading} onClick={onclick} className={cn("", className)}>
   {loading ?  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
 { text}
</Button>

  )
}

export default ButtonLogin
