import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap"; //!yazım olarak daha kullanışlı ama performans açısından üstteki yöntem daha ideal
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { data } from "../../helpers/data";
import LegendCard from "./LegendCard";

const LegendContainer = () => {
    const [search,SetSearch]=useState("")
//   const [show, setShow] = useState(false); burada yani parent comp tanımlarsak state 1 tane olmuş oluyor. tek bir state ile tüm veriyi yönetmeye çalışınca hata alıyoruz. o yuzden her bir veri için state tanımlamamız gerekeiyor. Bunun içinde verileri bir componette yazdırmış olduk.
const handlechange=(e)=>{
    SetSearch(e.target.value)// ! setter methodu hep asenkron çalışır bu yüzdne clg yaparken dışarıda yap 
    // console.log(search);
}
//   console.log(data);
  const filterData=data.filter(item=> item.name.toLowerCase().includes(search.trim().toLowerCase()));
  console.log(filterData);
  return (
    <div>
      <Form.Control type="search" placeholder="Search legends..." 
      onChange={handlechange} className="w-50 mx-auto my-2"
      />
      <Container>
        <Row xs={1} md={2} lg={3} className="justify-content-center g-3">
          {filterData.map((legend) => (            
            <LegendCard key={legend.id} legend={legend}/>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LegendContainer;
