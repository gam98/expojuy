import { useEffect, useState } from 'react';
import { readStorage } from '../lib/storage';
export function useLocalStorage<T>(key:string,initial:T){const [value,setValue]=useState<T>(()=>readStorage(key,initial));useEffect(()=>{localStorage.setItem(key,JSON.stringify(value))},[key,value]);return[value,setValue] as const}
