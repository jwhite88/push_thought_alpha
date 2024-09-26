import { FaPaperPlane } from "react-icons/fa"

const CampaignContactForm = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-bold mb-6">Showing your support is easy</h3>
    <form>
    <div className='mb-4'>
      <label
        className='block text-gray-700 text-sm font-bold mb-2'
        htmlFor='name'
      >
        Select State:
      </label>
      <select name="example">
            <option disabled selected value> -- select -- </option>
            <option value="Alabama">Alabama</option>
            <option value="Alaska">Alaska</option>
            <option value="Arizona">Arizona</option>
            <option value="Arkansas">Arkansas</option>
            <option value="California">California</option>
            <option value="Colorado">Colorado</option>
            <option value="Connecticut">Connecticut</option>
            <option value="Delaware">Delaware</option>
            <option value="Florida">Florida</option>
        </select>


      {/* <input
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        id='name'
        type='text'
        placeholder='Enter your name'             
        required
      /> */}
    </div>
      
      <div>
        {/* <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center"
          type="submit"
        >
          <FaPaperPlane className="mr-2" /> Send Message
        </button> */}
      </div>
    </form>
  </div>
  )
}

export default CampaignContactForm
