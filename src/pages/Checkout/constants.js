export const checkoutData = [
  {
    title: 'Delivery Address',
    link: '+ Add Address',
    type: 'checkout_address'
  },
  {
    title: 'Delivery Schedule',
    link: '',
    type: 'checkout_schedule',
    items: [
      {id: 1, title: 'Express-Delivery', description: '90 min express delivery'},
      {id: 2, title: '8am-11am', description: '8:00 AM - 11:00 AM'},
      {id: 3, title: '11am-2pm', description: '11:00 AM - 2:00 PM'},
      {id: 4, title: '2pm-5pm', description: '2:00 PM - 5:00 PM'},
      {id: 5, title: '8am-11am', description: '8:00 AM - 11:00 AM'},
      {id: 6, title: '11am-2pm', description: '11:00 AM - 2:00 PM'},
    ]
  },
  {
    title: 'Contact Number',
    link: '+ Add Number',
    type: 'checkout_phone'
  },
  {
    title: 'Payment Option',
    link: '+ Add Card',
    type: 'checkout_payment',
    items: [
      {id: 1, title: 'Visa', description: '**** **** **** 4355'},
      {id: 2, title: 'Visa', description: '**** **** **** 4355'},
      {id: 3, title: 'Visa', description: '**** **** **** 4355'}
    ]
  }
];