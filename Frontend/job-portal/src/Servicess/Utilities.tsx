const formateDate = (dateString: string) =>{

  const date = new Date(dateString);
  const optioons = {year: 'numeric' as const, month: 'short' as const};
  return date.toLocaleString('en-US', optioons);



}

export {formateDate};
