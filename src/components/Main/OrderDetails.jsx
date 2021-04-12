import { useWebshop } from '../../contexts/WebshopContext';

export default function OrderDetails() {
    const {orderMade} = useWebshop();

 return(
     <div className="order-details-div">
         <h3 className="h4-account">Ny order lagd!</h3>
         <h4 className="h4-account">Ordernummer: {orderMade.orderId}</h4>
     </div>
 )
}