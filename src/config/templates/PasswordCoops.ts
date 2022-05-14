function PasswordCoops(code: String){
return (
`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style type="text/css">
  body {
    background: #f1f1f1;
    font-family: Arial, sans-serif;
    font-size: 16px;
    font-size: 1em;
  }
  
  h2{
    color: #f1f1f1;
  }

  ::-moz-selection {
    background: #57F29E;
    color: #005b61;
  }
  
  ::selection {
    background: #57F29E;
    color: #005b61;
  }
  
  a,
  a:link {
    color: #06AA51;
    text-decoration: none;
    display: inline-block;
  }
  
  a:hover {
    color: #06AA51;
  }
  
  a:after {
    content: '';
    display: block;
    height: 1px;
    width: 0;
    background: #06AA51;
    -webkit-transition: width 0.3s;
    transition: width 0.3s;
  }
  
  a:hover:after {
    width: 100%;
    -webkit-transition: width 0.3s;
    transition: width 0.3s;
  }
  
  .text-center {
    text-align: center;
  }
  
  table {
    background: #57F29E;
    border: 1px solid #FFF;
    border-spacing: 0;
    width: 100%;
    max-width: 500px;
    margin: auto;
  }
  
  table tr th {
    height: 60px;
    color: #06AA51;
    font-weight: bold;
    font-size: 18px;
    font-size: 1.2em;
  }
  
  table tr th.title {
    background: #06AA51;
    color: #FFF;
  }
  
  table tr td {
    padding: 0px 30px;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
  }
  
  table tr td.salutation {
    padding: 60px 30px 30px 30px;
  }
  
  table tr td.button-like {
    color: #06AA51;
    padding-top: 30px;
  }
  
  table tr td.button-like a {
    background: #2FC373;
    padding: 20px 40px;
    border-radius: 3px;
  }
  
  table tfoot tr td {
    text-align: center;
    font-size: 12px;
    font-size: 0.8em;
    color: #FFF;
    padding: 60px 30px 30px 30px;
  }
  
  table {
    border-collapse: separate;
  }
  
  a, a:link, a:visited {
    text-decoration: none;
    color: #06AA51;
  }
  
  .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td {
    line-height: 100%;
  }
  
  .ExternalClass {
    width: 100%;
  }
  
  </style>
</head>
<body>
    
    <div class="ExternalClass">
     <table>
      <thead>
        <tr>
          <th>Codigo</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr>
          <td class="button-like">
            <a><h2>${code}</h2></a>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Leaf Shop</td>
        </tr>
      </tfoot>
    </table>
    </div>
</body>
</html>
`
)
}
export default PasswordCoops;