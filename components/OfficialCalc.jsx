import { useEffect, useState } from "react"
import ShareButtons from "./ShareButtons"
import { useParams } from "next/navigation"
const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null

const OfficialCalc = ({ campaign, state, setSocialData }) => {
  const { id } = useParams()
  const [official, setOfficials] = useState([])
  const [newCombinedData, setNewCombinedData] = useState([])


  useEffect(() => {
    console.log("Testing")
    fetch(`/api/officials?state=${state}`)

      .then(response => response.json())

      // .then(data => console.log(data))
      // Save data
      .then(data => {
        setOfficials(data)
        setSocialData(data)
      })

      .catch(error => console.log(error));
  }, [state])

  useEffect(() => {
    const urls = [`/api/officials?state=${state}`, `${apiDomain}/campaigns/${id}`];

    Promise.all(urls.map(url => fetch(url)))
      .then(responses => Promise.all(responses.map(response => response.json())))
      .then(data => {
        const combinedData = [
          {
            target_x: data[0][0].Twitter,
            target_instagram: data[0][0].Instagram,
            target_facebook: data[0][0].Facebook,
            Name: data[0][0].Name,
            name: data[1].name,
            _id: data[1]._id
          },
          {
            target_x: data[0][1].Twitter,
            target_instagram: data[0][1].Instagram,
            target_facebook: data[0][1].Facebook,
            Name: data[0][1].Name,
            name: data[1].name,
            _id: data[1]._id
          }
        ]
        setNewCombinedData(combinedData)
        // console.log("NEWDATA!!", data[0][0].Twitter);
      })
      .catch(error => { console.error('Error:', error); });


  }, [state])


  return (
    <div>
      <h2>Senators:</h2>
      {/* {official.length > 0 ? (
        official.map((item) => {
          return (
            <>
              <p>{item.Name} {item.Twitter}</p>
              <ShareButtons socialData={null} campaign={{ target_x: item.Twitter, target_instagram: item.Instagram, target_facebook: item.Facebook }} />
            </>
          )
        })
      ) : ""} */}
      {newCombinedData.length > 0 ? (
        newCombinedData.map((item) => {
          return (
            <>
              <div className="mb-6 flex items-center justify-between">
                <p>{item.Name}</p>
                <ShareButtons socialData={null} campaign={{ target_x: { address: item.target_x }, target_instagram: { address: item.target_instagram }, target_facebook: { address: item.target_facebook }, _id: item._id, name: item.name }} />
              </div>
            </>
          )
        })
      ) : ""}
    </div>
  )
}
export default OfficialCalc

// const urls = [ `/api/officials?state=${state}`, `${apiDomain}/campaigns/${id}`]; 

// Promise.all(urls.map(url => fetch(url))) 
// .then(responses => Promise.all(responses.map(response => response.json()))) 
// .then(data => { console.log(data); }) 
// .catch(error => { console.error('Error:', error); });

// const res = await fetch(`${apiDomain}/campaigns`, { cache:'no-store' })