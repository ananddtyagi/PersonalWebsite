import React from "react";
// used https://magic.reactjs.net/htmltojsx.htm

export default function AboutMe(props) {
  return (
    <div>
      <meta content="text/html; charset=UTF-8" httpEquiv="content-type" />
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            '@import url(\'https://themes.googleusercontent.com/fonts/css?kit=OPeqXG-QxW3ZD8BtmPikfA\');ul.lst-kix_khfvjhloz5ou-8{list-style-type:none}ul.lst-kix_khfvjhloz5ou-7{list-style-type:none}ul.lst-kix_khfvjhloz5ou-6{list-style-type:none}.lst-kix_9cqz6qvw3w3e-2>li:before{content:"\\0025a0  "}.lst-kix_9cqz6qvw3w3e-4>li:before{content:"\\0025cb  "}ul.lst-kix_khfvjhloz5ou-5{list-style-type:none}ul.lst-kix_khfvjhloz5ou-4{list-style-type:none}ul.lst-kix_khfvjhloz5ou-3{list-style-type:none}ul.lst-kix_khfvjhloz5ou-2{list-style-type:none}.lst-kix_9cqz6qvw3w3e-1>li:before{content:"\\0025cb  "}.lst-kix_9cqz6qvw3w3e-5>li:before{content:"\\0025a0  "}.lst-kix_9cqz6qvw3w3e-3>li:before{content:"\\0025cf  "}ul.lst-kix_khfvjhloz5ou-1{list-style-type:none}ul.lst-kix_khfvjhloz5ou-0{list-style-type:none}.lst-kix_9cqz6qvw3w3e-0>li:before{content:"\\0025cf  "}.lst-kix_9cqz6qvw3w3e-6>li:before{content:"\\0025cf  "}.lst-kix_9cqz6qvw3w3e-8>li:before{content:"\\0025a0  "}.lst-kix_9cqz6qvw3w3e-7>li:before{content:"\\0025cb  "}.lst-kix_r95xjyr31x8v-0>li:before{content:"\\0025cf  "}.lst-kix_8mik44j6ctir-5>li:before{content:"\\0025a0  "}.lst-kix_8mik44j6ctir-7>li:before{content:"\\0025cb  "}.lst-kix_8mik44j6ctir-6>li:before{content:"\\0025cf  "}.lst-kix_8mik44j6ctir-8>li:before{content:"\\0025a0  "}.lst-kix_r95xjyr31x8v-8>li:before{content:"\\0025a0  "}.lst-kix_i0v344qiejtz-8>li:before{content:"\\0025a0  "}.lst-kix_r95xjyr31x8v-6>li:before{content:"\\0025cf  "}.lst-kix_r95xjyr31x8v-7>li:before{content:"\\0025cb  "}.lst-kix_i0v344qiejtz-7>li:before{content:"\\0025cb  "}.lst-kix_i0v344qiejtz-6>li:before{content:"\\0025cf  "}.lst-kix_8mik44j6ctir-3>li:before{content:"\\0025cf  "}.lst-kix_i0v344qiejtz-5>li:before{content:"\\0025a0  "}.lst-kix_8mik44j6ctir-4>li:before{content:"\\0025cb  "}.lst-kix_i0v344qiejtz-2>li:before{content:"\\0025a0  "}.lst-kix_r95xjyr31x8v-1>li:before{content:"\\0025cb  "}.lst-kix_i0v344qiejtz-0>li:before{content:"\\0025cf  "}.lst-kix_i0v344qiejtz-4>li:before{content:"\\0025cb  "}.lst-kix_r95xjyr31x8v-2>li:before{content:"\\0025a0  "}.lst-kix_r95xjyr31x8v-3>li:before{content:"\\0025cf  "}.lst-kix_i0v344qiejtz-3>li:before{content:"\\0025cf  "}.lst-kix_8mik44j6ctir-2>li:before{content:"\\0025a0  "}.lst-kix_r95xjyr31x8v-4>li:before{content:"\\0025cb  "}.lst-kix_r95xjyr31x8v-5>li:before{content:"\\0025a0  "}.lst-kix_8mik44j6ctir-1>li:before{content:"\\0025cb  "}.lst-kix_i0v344qiejtz-1>li:before{content:"\\0025cb  "}.lst-kix_8mik44j6ctir-0>li:before{content:"\\0025cf  "}ul.lst-kix_5qlan4h5wr0s-1{list-style-type:none}ul.lst-kix_5qlan4h5wr0s-2{list-style-type:none}ul.lst-kix_5qlan4h5wr0s-0{list-style-type:none}ul.lst-kix_5qlan4h5wr0s-5{list-style-type:none}ul.lst-kix_5qlan4h5wr0s-6{list-style-type:none}ul.lst-kix_5qlan4h5wr0s-3{list-style-type:none}ul.lst-kix_5qlan4h5wr0s-4{list-style-type:none}ul.lst-kix_5qlan4h5wr0s-7{list-style-type:none}ul.lst-kix_5qlan4h5wr0s-8{list-style-type:none}ul.lst-kix_tnae3d5mqjf2-6{list-style-type:none}ul.lst-kix_tnae3d5mqjf2-5{list-style-type:none}ul.lst-kix_tnae3d5mqjf2-8{list-style-type:none}ul.lst-kix_tnae3d5mqjf2-7{list-style-type:none}.lst-kix_wj3grh7yphsf-7>li:before{content:"\\0025cb  "}.lst-kix_dlfn53ybtqoe-5>li:before{content:"\\0025a0  "}ul.lst-kix_tnae3d5mqjf2-0{list-style-type:none}ul.lst-kix_tnae3d5mqjf2-2{list-style-type:none}ul.lst-kix_tnae3d5mqjf2-1{list-style-type:none}.lst-kix_dlfn53ybtqoe-3>li:before{content:"\\0025cf  "}ul.lst-kix_tnae3d5mqjf2-4{list-style-type:none}ul.lst-kix_tnae3d5mqjf2-3{list-style-type:none}ul.lst-kix_8mik44j6ctir-8{list-style-type:none}.lst-kix_dlfn53ybtqoe-1>li:before{content:"\\0025cb  "}ul.lst-kix_8mik44j6ctir-4{list-style-type:none}ul.lst-kix_8mik44j6ctir-5{list-style-type:none}ul.lst-kix_8mik44j6ctir-6{list-style-type:none}ul.lst-kix_8mik44j6ctir-7{list-style-type:none}.lst-kix_awb03tu2ptkz-0>li:before{content:"\\0025cf  "}.lst-kix_sb6oiw2nmyqz-8>li:before{content:"\\0025a0  "}ul.lst-kix_c0yg8gb6hb5v-5{list-style-type:none}ul.lst-kix_c0yg8gb6hb5v-4{list-style-type:none}ul.lst-kix_c0yg8gb6hb5v-7{list-style-type:none}ul.lst-kix_c0yg8gb6hb5v-6{list-style-type:none}ul.lst-kix_c0yg8gb6hb5v-1{list-style-type:none}.lst-kix_awb03tu2ptkz-2>li:before{content:"\\0025a0  "}ul.lst-kix_c0yg8gb6hb5v-0{list-style-type:none}.lst-kix_sb6oiw2nmyqz-6>li:before{content:"\\0025cf  "}ul.lst-kix_c0yg8gb6hb5v-3{list-style-type:none}ul.lst-kix_c0yg8gb6hb5v-2{list-style-type:none}ul.lst-kix_9cqz6qvw3w3e-0{list-style-type:none}ul.lst-kix_9cqz6qvw3w3e-1{list-style-type:none}ul.lst-kix_9cqz6qvw3w3e-2{list-style-type:none}.lst-kix_wj3grh7yphsf-5>li:before{content:"\\0025a0  "}ul.lst-kix_9cqz6qvw3w3e-3{list-style-type:none}.lst-kix_sb6oiw2nmyqz-0>li:before{content:"\\0025cf  "}.lst-kix_sb6oiw2nmyqz-4>li:before{content:"\\0025cb  "}ul.lst-kix_9cqz6qvw3w3e-8{list-style-type:none}.lst-kix_wj3grh7yphsf-1>li:before{content:"\\0025cb  "}.lst-kix_wj3grh7yphsf-3>li:before{content:"\\0025cf  "}ul.lst-kix_9cqz6qvw3w3e-4{list-style-type:none}ul.lst-kix_9cqz6qvw3w3e-5{list-style-type:none}ul.lst-kix_9cqz6qvw3w3e-6{list-style-type:none}.lst-kix_sb6oiw2nmyqz-2>li:before{content:"\\0025a0  "}ul.lst-kix_9cqz6qvw3w3e-7{list-style-type:none}ul.lst-kix_8mik44j6ctir-0{list-style-type:none}ul.lst-kix_8mik44j6ctir-1{list-style-type:none}ul.lst-kix_8mik44j6ctir-2{list-style-type:none}ul.lst-kix_8mik44j6ctir-3{list-style-type:none}.lst-kix_5qlan4h5wr0s-7>li:before{content:"\\0025cb  "}.lst-kix_5qlan4h5wr0s-1>li:before{content:"\\0025cb  "}.lst-kix_5qlan4h5wr0s-3>li:before{content:"\\0025cf  "}ul.lst-kix_sb6oiw2nmyqz-0{list-style-type:none}ul.lst-kix_sb6oiw2nmyqz-1{list-style-type:none}.lst-kix_5qlan4h5wr0s-2>li:before{content:"\\0025a0  "}.lst-kix_5qlan4h5wr0s-6>li:before{content:"\\0025cf  "}ul.lst-kix_sb6oiw2nmyqz-4{list-style-type:none}ul.lst-kix_sb6oiw2nmyqz-5{list-style-type:none}ul.lst-kix_sb6oiw2nmyqz-2{list-style-type:none}ul.lst-kix_sb6oiw2nmyqz-3{list-style-type:none}.lst-kix_5qlan4h5wr0s-5>li:before{content:"\\0025a0  "}ul.lst-kix_sb6oiw2nmyqz-8{list-style-type:none}ul.lst-kix_sb6oiw2nmyqz-6{list-style-type:none}ul.lst-kix_sb6oiw2nmyqz-7{list-style-type:none}.lst-kix_5qlan4h5wr0s-4>li:before{content:"\\0025cb  "}ul.lst-kix_awb03tu2ptkz-8{list-style-type:none}.lst-kix_khfvjhloz5ou-1>li:before{content:"\\0025cb  "}.lst-kix_khfvjhloz5ou-2>li:before{content:"\\0025a0  "}ul.lst-kix_awb03tu2ptkz-5{list-style-type:none}ul.lst-kix_awb03tu2ptkz-4{list-style-type:none}ul.lst-kix_awb03tu2ptkz-7{list-style-type:none}ul.lst-kix_awb03tu2ptkz-6{list-style-type:none}.lst-kix_khfvjhloz5ou-4>li:before{content:"\\0025cb  "}ul.lst-kix_awb03tu2ptkz-1{list-style-type:none}ul.lst-kix_awb03tu2ptkz-0{list-style-type:none}.lst-kix_khfvjhloz5ou-3>li:before{content:"\\0025cf  "}.lst-kix_khfvjhloz5ou-5>li:before{content:"\\0025a0  "}ul.lst-kix_r95xjyr31x8v-0{list-style-type:none}ul.lst-kix_awb03tu2ptkz-3{list-style-type:none}ul.lst-kix_r95xjyr31x8v-1{list-style-type:none}ul.lst-kix_awb03tu2ptkz-2{list-style-type:none}.lst-kix_5qlan4h5wr0s-0>li:before{content:"\\0025cf  "}.lst-kix_khfvjhloz5ou-8>li:before{content:"\\0025a0  "}.lst-kix_awb03tu2ptkz-8>li:before{content:"\\0025a0  "}.lst-kix_khfvjhloz5ou-7>li:before{content:"\\0025cb  "}.lst-kix_khfvjhloz5ou-6>li:before{content:"\\0025cf  "}.lst-kix_awb03tu2ptkz-7>li:before{content:"\\0025cb  "}ul.lst-kix_c0yg8gb6hb5v-8{list-style-type:none}ul.lst-kix_wj3grh7yphsf-2{list-style-type:none}ul.lst-kix_wj3grh7yphsf-1{list-style-type:none}.lst-kix_awb03tu2ptkz-4>li:before{content:"\\0025cb  "}.lst-kix_awb03tu2ptkz-5>li:before{content:"\\0025a0  "}ul.lst-kix_wj3grh7yphsf-0{list-style-type:none}ul.lst-kix_wj3grh7yphsf-6{list-style-type:none}ul.lst-kix_wj3grh7yphsf-5{list-style-type:none}.lst-kix_awb03tu2ptkz-6>li:before{content:"\\0025cf  "}ul.lst-kix_wj3grh7yphsf-4{list-style-type:none}ul.lst-kix_wj3grh7yphsf-3{list-style-type:none}ul.lst-kix_wj3grh7yphsf-8{list-style-type:none}ul.lst-kix_wj3grh7yphsf-7{list-style-type:none}.lst-kix_dlfn53ybtqoe-6>li:before{content:"\\0025cf  "}ul.lst-kix_dlfn53ybtqoe-7{list-style-type:none}.lst-kix_dlfn53ybtqoe-7>li:before{content:"\\0025cb  "}.lst-kix_dlfn53ybtqoe-8>li:before{content:"\\0025a0  "}ul.lst-kix_dlfn53ybtqoe-8{list-style-type:none}ul.lst-kix_dlfn53ybtqoe-3{list-style-type:none}.lst-kix_c0yg8gb6hb5v-0>li:before{content:"\\0025cf  "}.lst-kix_tnae3d5mqjf2-3>li:before{content:"\\0025cf  "}ul.lst-kix_dlfn53ybtqoe-4{list-style-type:none}ul.lst-kix_dlfn53ybtqoe-5{list-style-type:none}ul.lst-kix_dlfn53ybtqoe-6{list-style-type:none}.lst-kix_c0yg8gb6hb5v-2>li:before{content:"\\0025a0  "}.lst-kix_tnae3d5mqjf2-1>li:before{content:"\\0025cb  "}.lst-kix_tnae3d5mqjf2-2>li:before{content:"\\0025a0  "}ul.lst-kix_dlfn53ybtqoe-0{list-style-type:none}ul.lst-kix_dlfn53ybtqoe-1{list-style-type:none}.lst-kix_c0yg8gb6hb5v-1>li:before{content:"\\0025cb  "}ul.lst-kix_dlfn53ybtqoe-2{list-style-type:none}.lst-kix_tnae3d5mqjf2-0>li:before{content:"\\0025cf  "}ul.lst-kix_r95xjyr31x8v-6{list-style-type:none}.lst-kix_c0yg8gb6hb5v-8>li:before{content:"\\0025a0  "}ul.lst-kix_r95xjyr31x8v-7{list-style-type:none}ul.lst-kix_r95xjyr31x8v-8{list-style-type:none}ul.lst-kix_r95xjyr31x8v-2{list-style-type:none}.lst-kix_c0yg8gb6hb5v-6>li:before{content:"\\0025cf  "}ul.lst-kix_r95xjyr31x8v-3{list-style-type:none}ul.lst-kix_r95xjyr31x8v-4{list-style-type:none}.lst-kix_c0yg8gb6hb5v-5>li:before{content:"\\0025a0  "}ul.lst-kix_r95xjyr31x8v-5{list-style-type:none}.lst-kix_c0yg8gb6hb5v-4>li:before{content:"\\0025cb  "}.lst-kix_c0yg8gb6hb5v-3>li:before{content:"\\0025cf  "}.lst-kix_tnae3d5mqjf2-4>li:before{content:"\\0025cb  "}.lst-kix_tnae3d5mqjf2-5>li:before{content:"\\0025a0  "}.lst-kix_tnae3d5mqjf2-7>li:before{content:"\\0025cb  "}.lst-kix_tnae3d5mqjf2-6>li:before{content:"\\0025cf  "}.lst-kix_tnae3d5mqjf2-8>li:before{content:"\\0025a0  "}.lst-kix_c0yg8gb6hb5v-7>li:before{content:"\\0025cb  "}.lst-kix_wj3grh7yphsf-6>li:before{content:"\\0025cf  "}.lst-kix_wj3grh7yphsf-8>li:before{content:"\\0025a0  "}.lst-kix_dlfn53ybtqoe-4>li:before{content:"\\0025cb  "}.lst-kix_dlfn53ybtqoe-2>li:before{content:"\\0025a0  "}ul.lst-kix_i0v344qiejtz-1{list-style-type:none}ul.lst-kix_i0v344qiejtz-0{list-style-type:none}ul.lst-kix_i0v344qiejtz-7{list-style-type:none}ul.lst-kix_i0v344qiejtz-6{list-style-type:none}ul.lst-kix_i0v344qiejtz-8{list-style-type:none}ul.lst-kix_i0v344qiejtz-3{list-style-type:none}ul.lst-kix_i0v344qiejtz-2{list-style-type:none}.lst-kix_dlfn53ybtqoe-0>li:before{content:"\\0025cf  "}ul.lst-kix_i0v344qiejtz-5{list-style-type:none}ul.lst-kix_i0v344qiejtz-4{list-style-type:none}.lst-kix_awb03tu2ptkz-1>li:before{content:"\\0025cb  "}.lst-kix_awb03tu2ptkz-3>li:before{content:"\\0025cf  "}.lst-kix_sb6oiw2nmyqz-7>li:before{content:"\\0025cb  "}.lst-kix_sb6oiw2nmyqz-5>li:before{content:"\\0025a0  "}.lst-kix_sb6oiw2nmyqz-3>li:before{content:"\\0025cf  "}.lst-kix_wj3grh7yphsf-4>li:before{content:"\\0025cb  "}.lst-kix_sb6oiw2nmyqz-1>li:before{content:"\\0025cb  "}li.li-bullet-0:before{margin-left:-18pt;white-space:nowrap;display:inline-block;min-width:18pt}.lst-kix_wj3grh7yphsf-2>li:before{content:"\\0025a0  "}.lst-kix_khfvjhloz5ou-0>li:before{content:"\\0025cf  "}.lst-kix_wj3grh7yphsf-0>li:before{content:"\\0025cf  "}.lst-kix_5qlan4h5wr0s-8>li:before{content:"\\0025a0  "}ol{margin:0;padding:0}table td,table th{padding:0}.c6{margin-left:36pt;padding-top:0pt;padding-left:0pt;padding-bottom:10pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c0{margin-left:72pt;padding-top:0pt;padding-left:0pt;padding-bottom:10pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c4{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:16pt;font-family:"Arial";font-style:normal}.c9{color:#111111;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:10pt;font-family:"Roboto";font-style:normal}.c7{padding-top:18pt;padding-bottom:10pt;line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.c2{color:#434343;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:14pt;font-family:"Arial";font-style:normal}.c5{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial";font-style:normal}.c3{background-color:#ffffff;font-size:10pt;font-family:"Roboto";color:#111111;font-weight:400}.c1{padding:0;margin:0}.c11{max-width:468pt;padding:72pt 72pt 72pt 72pt}.c8{page-break-after:avoid}.c10{background-color:#ffffff}.title{padding-top:0pt;color:#000000;font-size:26pt;padding-bottom:3pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle{padding-top:0pt;color:#666666;font-size:15pt;padding-bottom:16pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}li{color:#ffffff;font-size:11pt;font-family:"Arial"}p{margin:0;color:#000000;font-size:11pt;font-family:"Arial"}h1{padding-top:20pt;color:#000000;font-size:20pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2{padding-top:18pt;color:#000000;font-size:16pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h3{padding-top:16pt;color:#434343;font-size:14pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h4{padding-top:14pt;color:#666666;font-size:12pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h5{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h6{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}',
        }}
      />
      <h2 className="c7" id="h.kdxdatw2anr6">
        <span className="c4">Work Experience</span>
      </h2>
      <ul className="c1 lst-kix_dlfn53ybtqoe-0 start">
        <li className="c6 c8 li-bullet-0">
          <h2 id="h.nbniqga6uyad" style={{ display: "inline" }}>
            <span className="c4">Flexport (current)</span>
          </h2>
        </li>
        <li className="c6 li-bullet-0">
          <span className="c5">Software Engineer I</span>
        </li>
      </ul>
      <ul className="c1 lst-kix_dlfn53ybtqoe-1 start">
        <li className="c0 li-bullet-0">
          <span className="c5">
            Working on the Legal and Compliance Technology team where I help
            build tools and processes to streamline our compliance process.
          </span>
        </li>
      </ul>
      <ul className="c1 lst-kix_dlfn53ybtqoe-0">
        <li className="c6 c8 li-bullet-0">
          <h2 id="h.u1rc8dd1vpwp" style={{ display: "inline" }}>
            <span className="c4">Klarity (Jan 2021 - May 2021)</span>
          </h2>
        </li>
        <li className="c6 li-bullet-0">
          <span className="c5">Software Engineer Intern</span>
        </li>
      </ul>
      <ul className="c1 lst-kix_dlfn53ybtqoe-1 start">
        <li className="c0 li-bullet-0">
          <span className="c9">
            Used Python and AWS Textract to extract and display necessary
            information from tables in PDF documents. This was integrated into
            the website’s automated demo.
          </span>
        </li>
      </ul>
      <ul className="c1 lst-kix_dlfn53ybtqoe-0">
        <li className="c6 c8 li-bullet-0">
          <h2 id="h.qedlc2m1op2g" style={{ display: "inline" }}>
            <span className="c4">Incedo (Jun 2020 - Aug 2020)</span>
          </h2>
        </li>
        <li className="c6 li-bullet-0">
          <span className="c5">Data Science Intern</span>
        </li>
      </ul>
      <ul className="c1 lst-kix_dlfn53ybtqoe-1 start">
        <li className="c0 li-bullet-0">
          <span className="c3">
            Built models for credit risk defaulting prediction. Tasked with
            cleaning and organizing the data, providing insights on the data,
            and creating predictive models from that data to determine which
            applicants are likely to default.{" "}
          </span>
        </li>
      </ul>
      <ul className="c1 lst-kix_dlfn53ybtqoe-0">
        <li className="c6 c8 li-bullet-0">
          <h2 id="h.o321y4m7ptlc" style={{ display: "inline" }}>
            <span className="c4">Gulaq (May 2019 - Aug 2019)</span>
          </h2>
        </li>
        <li className="c6 li-bullet-0">
          <span className="c5">
            Web Development Intern, Algorithm Research Intern
          </span>
        </li>
      </ul>
      <ul className="c1 lst-kix_dlfn53ybtqoe-1 start">
        <li className="c0 li-bullet-0">
          <span className="c3">
            Worked alongside the product team in India to create the Survey page
            using React and Node.js. The survey took financial data from users
            that would eventually be used to provide personalized investment
            recommendations. Also developed an investment algorithm that
            provided a solution for optimizing the investment of a lump sum of
            money over multiple funds. I was tasked with choosing which
            heuristic would be the best to follow as well as what parameters we
            would be considering. In the end, I wrote a completely new algorithm
            over the one the company was using previously and was able to
            provide a better or equal result in 100% of the test cases. As a
            result, my algorithm is the one currently being used by the company.
          </span>
        </li>
      </ul>
      <ul className="c1 lst-kix_dlfn53ybtqoe-0">
        <li className="c6 c8 li-bullet-0">
          <h2 id="h.yucxrre3bf65" style={{ display: "inline" }}>
            <span className="c4">SK Holdings (May 2018 - Aug 2018)</span>
          </h2>
        </li>
        <li className="c6 li-bullet-0">
          <span className="c5">
            Research Assistant, Technology Consultant, Internship
          </span>
        </li>
      </ul>
      <ul className="c1 lst-kix_dlfn53ybtqoe-1 start">
        <li className="c0 li-bullet-0">
          <span className="c3">
            Worked alongside the Global Business Development team to research
            companies for potential investment. This was the first time SK
            Holdings was investing in foreign companies and as the first foreign
            hire, my main functions included researching foreign startups for
            potential investment, helping decide which companies would be worth
            investing in, and at times, communicating and interviewing companies
            directly. I also provided assistance in understanding the
            technological or scientific aspects of the products we reviewed.
          </span>
        </li>
      </ul>
      <h2 className="c7" id="h.9jpl56n1m03w">
        <span className="c4">Education</span>
      </h2>
      <ul className="c1 lst-kix_5qlan4h5wr0s-0 start">
        <li className="c6 c8 li-bullet-0">
          <h2 id="h.rjpptv7num1a" style={{ display: "inline" }}>
            <span className="c4">NYU (Aug 2017 - May 2021)</span>
          </h2>
        </li>
        <li className="c6 li-bullet-0">
          <span className="c5">B.A. Computer Science and Data Science</span>
        </li>
      </ul>
      <ul className="c1 lst-kix_5qlan4h5wr0s-1 start">
        <li className="c0 li-bullet-0">
          <span className="c9 c10">
            Selected Coursework: Introduction to Machine Learning, Computer
            Graphics, Algorithms, Data Structures, Operating Systems,
            Bio-Inspired Robotics, Linear Algebra, Probability and Statistics,
            Honors Multivariable
            Calculus&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        </li>
      </ul>
      <h2 className="c7" id="h.15izvnjbi14g">
        <span className="c4">Hobbies</span>
      </h2>
      <ul className="c1 lst-kix_r95xjyr31x8v-0 start">
        <li className="c6 c8 li-bullet-0">
          <h3 id="h.qkj7n1ofdymt" style={{ display: "inline" }}>
            <span className="c2">Music</span>
          </h3>
        </li>
      </ul>
      <ul className="c1 lst-kix_r95xjyr31x8v-1 start">
        <li className="c0 li-bullet-0">
          <span className="c9 c10">
            Performed piano at Lincoln Center and Carnegie Hall. Currently
            learning the electric guitar and have learned acoustic guitar,
            violin, most percussive instruments, and harmonica.
          </span>
        </li>
      </ul>
      <ul className="c1 lst-kix_r95xjyr31x8v-0">
        <li className="c6 li-bullet-0">
          <span className="c2">Travel</span>
        </li>
      </ul>
      <ul className="c1 lst-kix_r95xjyr31x8v-1 start">
        <li className="c0 li-bullet-0">
          <span className="c3">
            Traveled to 26 countries both with my family and alone. Awarded the
            ​prestigious​ ​NSLI-Y government scholarship to study abroad for 6
            weeks in Korea to learn Korean.
          </span>
        </li>
      </ul>
      <ul className="c1 lst-kix_r95xjyr31x8v-0">
        <li className="c6 c8 li-bullet-0">
          <h3 id="h.p3p0cclmlzxp" style={{ display: "inline" }}>
            <span className="c2">Languages</span>
          </h3>
        </li>
      </ul>
      <ul className="c1 lst-kix_r95xjyr31x8v-1 start">
        <li className="c0 li-bullet-0">
          <span className="c3">
            Fluent in English and Hindi. Proficient in Korean. Knowledge of
            Spanish and Mandarin.
          </span>
        </li>
      </ul>
      <ul className="c1 lst-kix_r95xjyr31x8v-0">
        <li className="c6 c8 li-bullet-0">
          <h3 id="h.4wtgc03fz1k6" style={{ display: "inline" }}>
            <span className="c2">Magic</span>
          </h3>
        </li>
      </ul>
      <ul className="c1 lst-kix_r95xjyr31x8v-1 start">
        <li className="c0 li-bullet-0">
          <span className="c3">
            Performed magic tricks for 10 years and invited to perform in
            professional settings numerous times.
          </span>
        </li>
      </ul>
    </div>
  );
}
