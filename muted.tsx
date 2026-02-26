const value = e.target.value;

if (/^-?\d*\.?\d*$/.test(value)) {
  // Update UI string state
  setAmountInputs(prev => ({
    ...prev,
    [idx]: value
  }));

  // Only update Decimal when valid number
  if (
    value !== "" &&
    value !== "-" &&
    value !== "." &&
    value !== "-."
  ) {
    const updated = [...(rental.transaction_model_rental_customer_revenue ?? [])];

    updated[idx] = {
      ...updated[idx],
      amount: new Decimal(value)
    };

    setRental({
      ...rental,
      transaction_model_rental_customer_revenue: updated
    });
  }
}
