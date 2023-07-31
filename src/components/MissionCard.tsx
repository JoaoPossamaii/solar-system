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
    <div>
      <strong>{name}</strong>

      <div>
        <p>{year}</p>
        <p>{country}</p>
        <p>{destination}</p>
      </div>
    </div>
  )
}

export default MissionCard;