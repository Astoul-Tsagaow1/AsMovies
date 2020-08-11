import React from "react";

export default function Pagination(props) {
  const pagesLink = [];

  for (let i = 1; i <=10 ; i++) {
    let active =props.CorrentPage == i ?'active':'';
    pagesLink.push( <li class={`page-item ${active}`} key={i}><a class={`page-link `} href={`#page=${i}`} onClick={()=>{
     return props.paginat(i)
    }}>{i}</a></li>
    );
  }
  console.log(pagesLink);


  return (<nav aria-label="Page navigation example bg=dark">
  <ul class="pagination justify-content-end">

    {props.CorrentPage > 1 ?  <li class={`page-item `} ><a class={`page-link `} href={`#`} onClick={()=>{ return props.paginat(props.CorrentPage -1)}}>Prev</a></li> :'' }
    {pagesLink}
    
    {props.CorrentPage < props.numberPages +1 ?  <li class={`page-item `} ><a class={`page-link `} href="#" onClick={()=>{ return props.paginat(props.CorrentPage +1)}}>Next</a></li> :'' }

  </ul>
</nav>

  );
}
