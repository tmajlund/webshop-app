import { useWebshop } from '../../contexts/WebshopContext';

export default function OrderDetails() {
    const {orderMade} = useWebshop();

 return(
     <div>
         <h3>Ny order lagd!</h3>
         <h4>Ordernummer: {orderMade.orderId}</h4>
     </div>
 )
}