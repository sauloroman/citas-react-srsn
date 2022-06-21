const Alerts = ({mensaje, tipo}) => {

  const bg = tipo === 'error' ? 'rgb(185 28 28)': 'rgb(21 128 61)';

  return (
    <div className="text-center mb-5">
      <p className="p-3 text-white uppercase font-bold text-sm" style={{backgroundColor: bg}}>{ mensaje }</p>
    </div>
  )
}

export default Alerts