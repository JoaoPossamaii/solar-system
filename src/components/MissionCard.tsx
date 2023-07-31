type MissionCardProps = {
  name: string;
  year: string;
  country: string;
  destination: string;
}

function MissionCard({
  name,
  year,
  country,
  destination,
}: MissionCardProps) {


  return (
    <div className="mission-card">
      <strong>{name}</strong>

      <div className="data-wrapper">
        <p>{year}</p>
        <p>{country}</p>
        <p>{destination}</p>
      </div>
    </div>
  )
}

export default MissionCard;