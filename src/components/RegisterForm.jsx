

export const RegisterForm = () => {
  return (
    <><div className="flex justify-center ">
        <div className="mt-5 border w-11/12 rounded">
            <div className="flex justify-center p-6 border-b  ">
                <h3 className="text-3xl md:1xl  font-sans">Hostel Application Form Academic Year 2024-2025</h3>

            </div>
            {/* Admission Details */}
            <div className=" space-y-6 border-b p-10">
                <h6 className="text-2xl text-secondary font-bold tracking-wider ">Admission Details</h6>
                <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-2 ">
                    <div className="space-y-2">
                        <h4 className="font-sans">College Application No. <span className="text-red-500 font-bold">*</span></h4>
                        <input className="w-10/12 px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400" type="text" />
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-sans">Roll No. <span className="text-red-500 font-bold">*</span></h4>
                        <input className="w-10/12 px-2 py-2 rounded-lg font-medium font-sans border border-gray-500  text-sm  focus:border-3   bg-white  focus:border-gray-400" type="text" />
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-sans">Upload your College fees receipt <span className="text-red-500 font-bold">*</span></h4>
                        <input className="w-10/12 rounded-lg font-medium  text-gray-900 font-sans border-gray-400  border cursor-pointer bg-white  focus:border-gray-400" id="file_input" type="file"/>
                    </div>
                    <div className="space-y-2 font-sans">
                        <h4 className="font-sans">Programme <span className="text-red-500 font-bold">*</span></h4>
                        <select id="courses" className="bg-white border px-2 py-2 font-medium cursor-pointer font-sans border-gray-500 text-gray-900 text-sm rounded-lg focus:border-gray-400 w-10/12">
                            <option selected className="font-sans">Select Course</option>
                            <option value="CE" className="font-sans">B.E Civil Engineering</option>
                            <option value="CSE" className="font-sans">B.E Computer Science Engineering</option>
                            <option value="ECE" className="font-sans">B.E Electronics and Communication Engineering</option>
                            <option value="EEE" className="font-sans">B.E Electrical and Electronics Engineering</option>
                            <option value="ME" className="font-sans">B.E Mechanical Engineering</option>
                        </select>                    
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-sans">Year of Study ( New Admission Select I ) <span className="text-red-500 font-bold">*</span></h4>
                        <select id="fyear" className="bg-white border px-2 py-2 font-medium cursor-pointer font-sans border-gray-500 text-gray-900 text-sm rounded-lg focus:border-gray-400 w-10/12 ">
                            <option selected>Year</option>
                            <option value="First" className="font-sans">First Year</option>
                        </select>                    
                    </div>                    
                </div>
            </div>
            {/* General Details */}
            <div className=" space-y-4 border-b p-10">
                <h6 className="text-2xl text-secondary font-bold tracking-wider ">General Details</h6>
                <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-2">
                    <div className="space-y-2">
                        <h4 className="font-sans">Student Name <span className="text-red-500 font-bold">*</span></h4>
                        <input className="w-10/12 px-1 py-2 rounded-lg font-medium border border-gray-500  text-sm  focus:border-3   bg-white  focus:border-gray-400" type="text" />
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-sans">Upload your passport size photo <span className="text-red-500 font-bold">*</span></h4>
                        <input className="w-10/12 rounded-lg font-medium text-gray-900 font-sans border-gray-500  border cursor-pointer bg-white  focus:border-gray-400" id="file_input" type="file"/>
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-sans">Date of Birth <span className="text-red-500 font-bold">*</span></h4>
                        <input className="w-10/12 px-2 py-2 rounded-lg font-medium border border-gray-500  text-sm  focus:border-3   bg-white  focus:border-gray-400" type="text" />
                    </div>
                    
                    <div className="space-y-2 font-sans">
                        <h4 className="font-sans">Blood Group <span className="text-red-500 font-bold">*</span></h4>
                        <select id="blood-group" className="bg-white border px-2 py-2 font-medium cursor-pointer font-sans border-gray-500 text-gray-900 text-sm rounded-lg focus:border-gray-400 w-10/12">
                            <option selected className="font-sans">Select Group</option>
                            <option value="A+" className="font-sans">A+</option>
                            <option value="A-" className="font-sans">A-</option>
                            <option value="B+" className="font-sans">B+</option>
                            <option value="B-" className="font-sans">B-</option>
                            <option value="AB+" className="font-sans">AB+</option>
                            <option value="AB-" className="font-sans">AB-</option>
                            <option value="NA" className="font-sans">NA</option>
                        </select>                    
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-sans">Other Blood Group </h4>
                        <input className="w-10/12 px-1 py-2 rounded-lg font-medium border border-gray-500  text-sm font-serif focus:border-3  placeholder-gray-600 bg-white  focus:border-gray-400" type="text" placeholder="NA" />
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-sans">Gender <span className="text-red-500 font-bold">*</span></h4>
                        <select id="gender" className="bg-white border px-2 py-2 font-medium cursor-pointer font-sans border-gray-500 text-gray-900 text-sm rounded-lg focus:border-gray-400 w-10/12 ">
                            <option selected className="font-sans">Select Gender</option>
                            <option value="male" className="font-sans">Male</option>
                            <option value="female" className="font-sans">Female</option>
                        </select>                    
                    </div> 
                    <div className="space-y-2">
                        <h4 className="font-sans">Nationality <span className="text-red-500 font-bold">*</span></h4>
                        <select id="nation" className="bg-white border px-2 py-2 font-medium cursor-pointer font-sans border-gray-500 text-gray-900 text-sm rounded-lg focus:border-gray-400 w-10/12 ">
                            <option selected className="font-sans">Select Nationality</option>
                            <option value="india" className="font-sans">India</option>
                            <option value="other" className="font-sans">Other</option>
                        </select>  
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-sans">Religion <span className="text-red-500 font-bold">*</span></h4>
                        <input className="w-10/12 px-2 py-2 rounded-lg font-medium border border-gray-500  text-sm  focus:border-3   bg-white  focus:border-gray-400" type="text" />
                    </div>
                    <div className="space-y-2 font-sans">
                        <h4 className="font-sans">Community <span className="text-red-500 font-bold">*</span></h4>
                        <select id="community" className="bg-white border px-2 py-2 font-medium cursor-pointer font-sans border-gray-500 text-gray-900 text-sm rounded-lg focus:border-gray-400 w-10/12">
                            <option selected className="font-sans">Select Community</option>
                            <option value="BC" className="font-sans">BC</option>
                            <option value="MBC" className="font-sans">MBC</option>
                            <option value="oC" className="font-sans">OC</option>
                            <option value="BCM" className="font-sans">BCM</option>
                            <option value="SC" className="font-sans">SC</option>
                            <option value="ST" className="font-sans">ST</option>
                            <option value="SCA" className="font-sans">SCA</option>
                            <option value="DNC" className="font-sans">DNC</option>
                        </select>                    
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-sans">Caste <span className="text-red-500 font-bold">*</span></h4>
                        <input className="w-10/12 px-2 py-2 rounded-lg font-medium border border-gray-500  text-sm  focus:border-3   bg-white  focus:border-gray-400" type="text" />
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-sans">Differently Abled <span className="text-red-500 font-bold">*</span></h4>
                        <select id="differently-abled" className="bg-white border px-2 py-2 font-medium cursor-pointer font-sans border-gray-500 text-gray-900 text-sm rounded-lg focus:border-gray-400 w-10/12 ">
                            <option selected className="font-sans">-------</option>
                            <option value="yes" className="font-sans">Yes</option>
                            <option value="no" className="font-sans">No</option>
                        </select>                    
                    </div> 
                    <div className="space-y-2">
                        <h4 className="font-sans">Student Mobile <span className="text-red-500 font-bold">*</span></h4>
                        <input className="w-10/12 px-2 py-2 rounded-lg font-medium border border-gray-500  text-sm  focus:border-3   bg-white  focus:border-gray-400" type="text" />
                    </div>  
                    <div className="space-y-2">
                        <h4 className="font-sans">Student Mail <span className="text-red-500 font-bold">*</span></h4>
                        <input className="w-10/12 px-2 py-2 rounded-lg font-medium border border-gray-500  text-sm  focus:border-3   bg-white  focus:border-gray-400" type="text" />
                    </div>           
                </div>
            </div>
            {/* Parent Details */}
            <div className=" space-y-4 border-b p-10">
                <h6 className="text-2xl text-secondary font-bold tracking-wider ">Parent Details</h6>
                    <div className="space-y-2">
                        <h4 className="font-sans">Annual Income (In Rs.) <span className="text-red-500 font-bold">*</span></h4>
                        <input className="w-full px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400" type="text" />
                    </div>
                    <div className="grid lg:grid-cols-5 md:grid-cols-1 gap-2">
                        {/* Father's Details */}
                        <div className="space-y-2">
                            <h4 className="font-sans">Father<span>&#39;</span>s Name</h4>
                            <input className="w-10/12 px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400" type="text" />
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-sans">Father<span>&#39;</span>s Occupation</h4>
                            <input className="w-10/12 px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400" type="text" />
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-sans">Father<span>&#39;</span>s Mobile No.</h4>
                            <input className="w-10/12 px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400" type="text" />
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-sans">Father<span>&#39;</span>s Mail</h4>
                            <input className="w-10/12 px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400" type="text" />
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox"  />
                            <p className="font-sans p-2 text-sm">Click here if Father<span>&#39;</span>s Details is Not Applicable</p>
                        </div>
                        {/* Mother's Details */}
                        <div className="space-y-2">
                            <h4 className="font-sans">Mother<span>&#39;</span>s Name</h4>
                            <input className="w-10/12 px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400" type="text" />
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-sans">Mother<span>&#39;</span>s Occupation</h4>
                            <input className="w-10/12 px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400" type="text" />
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-sans">Mother<span>&#39;</span>s Mobile No.</h4>
                            <input className="w-10/12 px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400" type="text" />
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-sans">Mother<span>&#39;</span>s Mail</h4>
                            <input className="w-10/12 px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400" type="text" />
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox"  />
                            <p className="font-sans p-2 text-sm">Click here if Mother<span>&#39;</span>s Details is Not Applicable</p>
                        </div>
                        {/* Guardian Details */}
                        <div className="space-y-2">
                            <h4 className="font-sans">Guardian<span>&#39;</span>s Name</h4>
                            <input className="w-10/12 px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400" type="text" />
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-sans">Guardian<span>&#39;</span>s Occupation</h4>
                            <input className="w-10/12 px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400" type="text" />
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-sans">Guardian<span>&#39;</span>s Mobile No.</h4>
                            <input className="w-10/12 px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400" type="text" />
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-sans">Guardian<span>&#39;</span>s Mail</h4>
                            <input className="w-10/12 px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400" type="text" />
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox"  />
                            <p className="font-sans p-2 text-sm">Click here if Guardian<span>&#39;</span>s Details is Not Applicable</p>
                        </div>
                    </div>
            </div>
            {/* Address */}
            <div>
                <div className=" space-y-4 border-b p-10">
                    {/* Permanent Address */}
                    <div>
                        <h6 className="text-2xl text-secondary font-bold tracking-wider ">Permanent Address</h6>
                        <div className="grid lg:grid-cols-5 md:grid-cols-1 gap-2">
                            <div className="space-y-2">
                                <h4 className="font-sans">Address with Door No. <span className="text-red-500 font-bold">*</span></h4>
                                <input className="w-10/12 px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400" type="text" />
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-sans">City. <span className="text-red-500 font-bold">*</span></h4>
                                <input className="w-10/12 px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400" type="text" />
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-sans">State. <span className="text-red-500 font-bold">*</span></h4>
                                <input className="w-10/12 px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400" type="text" />
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-sans">Country. <span className="text-red-500 font-bold">*</span></h4>
                                <input className="w-10/12 px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400" type="text" />
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-sans">Pin Code. <span className="text-red-500 font-bold">*</span></h4>
                                <input className="w-10/12 px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400" type="text" />
                            </div>
                        </div>
                    </div>
                    {/* Communication Address */}
                    <div>
                        <h6 className="text-2xl text-secondary font-bold tracking-wide">Communication Address</h6>
                        <div className="flex items-center">
                            <input type="checkbox"  />
                            <p className="font-sans p-2 text-sm">Same as Permanent Address</p>
                        </div>

                        <div className="grid lg:grid-cols-5 md:grid-cols-1 gap-2">
                            <div className="space-y-2">
                                <h4 className="font-sans">Address with Door No. <span className="text-red-500 font-bold">*</span></h4>
                                <input className="w-10/12 px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400" type="text" />
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-sans">City. <span className="text-red-500 font-bold">*</span></h4>
                                <input className="w-10/12 px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400" type="text" />
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-sans">State. <span className="text-red-500 font-bold">*</span></h4>
                                <input className="w-10/12 px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400" type="text" />
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-sans">Country. <span className="text-red-500 font-bold">*</span></h4>
                                <input className="w-10/12 px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400" type="text" />
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-sans">Pin Code. <span className="text-red-500 font-bold">*</span></h4>
                                <input className="w-10/12 px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400" type="text" />
                            </div>
                        </div>
                    </div>  
                    
                </div>
            </div>
            {/* Declaration */}
            <div>
                <div className="space-y-6 border-b p-10">
                    <h6 className="text-2xl text-secondary font-bold tracking-wider ">Declaration</h6>
                    <div className="flex items-center ml-5">
                        <input type="checkbox"  />
                        <p className="font-sans p-2 text-sm">I hereby confirm that I have carefully reviewed and fully understand the contents of the above form. I agree to all the terms, conditions, and regulations outlined within.</p>
                    </div>
                </div>
            </div>
            {/* Submit */}
            <div className="flex justify-center">
                <div className="space-y-6 font-sans border-b p-10">
                <button className="bg-secondary  hover:bg-primary text-white font-bold py-2 px-4 rounded"> Submit </button>
                </div>
            </div>
        </div>
    </div>
        
    </>
  )
}
