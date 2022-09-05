// import React from 'react'
// import { supabase } from '~/utils/supabaseClient'

// const Details = ({deex}:any) => {
//   console.log(deex)
//   return (
//     <div>{deex.name}</div>
//   )
// }

// export const getStaticPaths =async () => {
//   const {data: deex}:any = await supabase
//   .from('experiences')
//   .select('id')

//   const paths = deex.map(({id}:any)=>({
//     params:{
//       id:id.toString()
//     }
//   }))

//   return {
//     paths,
//     // fallback:false
//   }
// }

// export const getStaticProps =async (id:any) => {
//   const {data:deex}:any = await supabase.from('experiences').select('*').eq('id',id).single()

//   return {
//     props:{
//       deex,
//     }
//   }
// }

// export default Details