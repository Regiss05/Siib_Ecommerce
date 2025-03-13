import { useParams } from "react-router-dom";

const PaymentPage = () => {
  const { orderId } = useParams();

  return (
    <div>
      <h1>Payment Confirmation</h1>
      <p>Order ID: {orderId}</p>
      {/* Here you can handle Pi payment integration */}
    </div>
  );
};

export default PaymentPage;
