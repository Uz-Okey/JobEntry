import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill1, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Joblist = () => {
  const [jobsPartTime, setJobsPartTime] = useState([])
  const [jobsFullTime, setJobsFullTime] = useState([])
  const [error, setError] = useState('')
  const [section1Visible, setSection1Visible] = useState(false)
  const [section2Visible, setSection2Visible] = useState(false)
  const [activeTab, setActiveTab] = useState('partTime') // handle tab switching

  const sectRef1 = useRef(null)
  const sectRef2 = useRef(null)

  // Intersection Observer for tab animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === sectRef1.current) setSection1Visible(entry.isIntersecting)
          if (entry.target === sectRef2.current) setSection2Visible(entry.isIntersecting)
        })
      },
      { threshold: 0.2 }
    )

    if (sectRef1.current) observer.observe(sectRef1.current)
    if (sectRef2.current) observer.observe(sectRef2.current)

    return () => observer.disconnect()
  }, [])

  // Fetch Jobs with cache to prevent breaking when navigating
  useEffect(() => {
    let isMounted = true

    const fetchJobs = async () => {
      try {
        const res = await axios.get('https://remotive.com/api/remote-jobs')
        if (isMounted) {
          const allJobs = res.data.jobs
          setJobsPartTime(allJobs.slice(19, 25))
          setJobsFullTime(allJobs.slice(34, 38))
        }
      } catch (err) {
        if (isMounted) setError(err.message)
      }
    }

    fetchJobs()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div>
      {/* Tabs */}
      <div className="border-b my-[50px] border-gray-200 dark:border-neutral-700">
        <nav className="p-5 flex justify-center gap-x-6" aria-label="Tabs" role="tablist">
          <button
            ref={sectRef1}
            type="button"
            className={`cursor-pointer h-9 px-4 rounded-md border-b-2 border-gray-700 text-sm whitespace-nowrap inline-flex items-center gap-x-2 transition-all duration-500 ${
              section1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            } ${activeTab === 'partTime' ? 'bg-gray-700 text-white border-blue-600 font-semibold' : 'bg-white text-gray-700 hover:bg-gray-700 hover:text-white'}`}
            onClick={() => setActiveTab('partTime')}
            role="tab"
          >
            Part Time
          </button>

          <button
            ref={sectRef2}
            type="button"
            className={`cursor-pointer h-9 px-4 rounded-md border-b-2 border-gray-700 text-sm whitespace-nowrap inline-flex items-center gap-x-2 transition-all duration-500 ${
              section2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            } ${activeTab === 'fullTime' ? 'bg-gray-700 text-white border-blue-600 font-semibold' : 'bg-white text-gray-700 hover:bg-gray-700 hover:text-white'}`}
            onClick={() => setActiveTab('fullTime')}
            role="tab"
          >
            Full Time
          </button>
        </nav>
      </div>

      {/* Part Time Jobs */}
      {activeTab === 'partTime' && (
        <div role="tabpanel">
          {error && <div className="text-red-500 text-center">{error}</div>}
          {jobsPartTime.map((job) => (
            <div
              key={job.id}
              className="flex my-4 w-[80%] px-5 mx-auto flex-col bg-white border border-gray-200 shadow-2xl text-gray-700 rounded-md dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
            >
              <div className="p-4 grid sm:grid-cols-2 items-center md:p-5">
                <div className="flex gap-7">
                  <img
                    src={job.company_logo}
                    alt="company logo"
                    className="w-12 sm:w-10 sm:h-12 border rounded-md border-gray-200 p-2"
                  />
                  <div>
                    <h1 className="font-bold md:text-[20px]">{job.company_name}</h1>
                    <p className="text-[13px]">
                      Location <FontAwesomeIcon icon={faLocationDot} />: {job.candidate_required_location}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="font-medium md:text-[13px]">Business Title: {job.title}</p>
                  <p className="text-[13px] font-bold text-green-700">
                    Salary <FontAwesomeIcon icon={faMoneyBill1} />: {job.salary}
                  </p>

                  <div className="p-3 flex justify-start gap-5 mb-[-20px] items-baseline">
                    <p className="text-[16px]">Job: {job.category}</p>
                    <button className="bg-gray-700 rounded-md py-1 px-5 hover:shadow-2xl hover:shadow-black cursor-pointer text-white">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Full Time Jobs */}
      {activeTab === 'fullTime' && (
        <div role="tabpanel">
          {error && <div className="text-red-500 text-center">{error}</div>}
          {jobsFullTime.map((job) => (
            <div
              key={job.id}
              className="flex my-4 w-[80%] px-5 mx-auto flex-col bg-white border border-gray-200 shadow-2xl text-gray-700 rounded-md dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
            >
              <div className="p-4 grid sm:grid-cols-2 items-center md:p-5">
                <div className="flex gap-7">
                  <img
                    src={job.company_logo}
                    alt="company logo"
                    className="w-12 sm:w-10 sm:h-12 border rounded-md border-gray-200 p-2"
                  />
                  <div>
                    <h1 className="font-bold md:text-[20px]">{job.company_name}</h1>
                    <p className="text-[13px]">
                      Location <FontAwesomeIcon icon={faLocationDot} />: {job.candidate_required_location}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="font-medium md:text-[13px]">Business Title: {job.title}</p>
                  <p className="text-[13px] font-bold text-green-700">
                    Salary <FontAwesomeIcon icon={faMoneyBill1} />: {job.salary}
                  </p>

                  <div className="p-3 flex justify-start gap-5 mb-[-20px] items-baseline">
                    <p className="text-[16px]">Job: {job.category}</p>
                    <button className="bg-gray-700 rounded-md py-1 px-5 hover:shadow-2xl hover:shadow-black cursor-pointer text-white">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Joblist
