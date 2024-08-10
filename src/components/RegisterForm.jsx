import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import Validation from "../Validation/RegisterValidate"

export const RegisterForm = () => {
    const [values, setValues] = useState({
        application_no : '',
        roll_no : '',
        fees_receipt: null,
        course: '',
        year: '',
        student_name: '',
        student_photo: null,
        DOB: '',
        blood_group: '',
        other_BG: '',
        gender: '',
        nationality: '',
        religion: '',
        community: '',
        caste: '',
        differently_abled: '',
        student_mobile_no: '',
        student_email_id: '',
        annual_income: '',
        father_name: '',
        father_occupation: '',
        father_mobile_no: '',
        father_email_id: '',
        mother_name: '',
        mother_occupation: '',
        mother_mobile_no: '',
        mother_email_id: '',
        guardian_name: '',
        guardian_occupation: '',
        guardian_mobile_no: '',
        guardian_email_id: '',
        permanent_address: '',
        permanent_city: '',
        permanent_state: '',
        permanent_country: '',
        permanent_pincode: '',
        communication_address: '',
        communication_city: '',
        communication_state: '',
        communication_country: '',
        communication_pincode: ''
    })

    const navigate = useNavigate();

    const [sameAsPermanent, setSameAsPermanent] = useState(false);

    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    }
    const handleFileChange = (event) => {
        const { name, files } = event.target;
        setValues({ ...values, [name]: files[0] });
    };
    const [checkboxState, setCheckboxState] = useState({
        father: false,
        mother: false,
        guardian: false
    });
    const handleCheckbox = ( field) => {
        setCheckboxState(prevState => ({
            ...prevState,
            [field]: !prevState[field]
        }));
    };

    const handleCheckboxChange = (values, setValues) => {
        setSameAsPermanent(!sameAsPermanent); // Toggle the state of the checkbox
        if (!sameAsPermanent) {
            // If checkbox is checked, copy values from permanent address to communication address
            setValues({
                ...values,
                communication_address: values.permanent_address,
                communication_city: values.permanent_city,
                communication_state: values.permanent_state,
                communication_country: values.permanent_country,
                communication_pincode: values.permanent_pincode
            });
        } else {
            // If checkbox is unchecked, clear communication address fields
            setValues({
                ...values,
                communication_address: "",
                communication_city: "",
                communication_state: "",
                communication_country: "",
                communication_pincode: ""
            });
        }
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrors(Validation(values));

        const formData = new FormData();
        Object.entries(values).forEach(([key, value]) => {
            formData.append(key, value);
        });

        try {
            const response = await axios.post('http://localhost:8081/api/new-register', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            navigate('/student-login');
            console.log(response)
        } catch (error) {
            console.log('Error submitting the form:', error);
        }
    };

  return (
    <><div className="flex justify-center ">
        <div className="mt-5 border w-11/12 rounded">
            <div className="flex justify-center p-6 border-b  ">
                <h3 className="text-3xl md:1xl  font-sans">Hostel Application Form Academic Year 2024-2025</h3>

            </div>
            <form action="" onSubmit={handleSubmit}>
            {/* Admission Details */}
            <div className=" space-y-6 border-b p-10">
                <h6 className="text-2xl text-secondary font-bold tracking-wider ">Admission Details</h6>
                <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-2 ">
                    <div className="space-y-2">
                        <h4 className="font-sans">College Application No. <span className="text-red-500 font-bold">*</span></h4>
                        <input name="application_no" onChange={handleInput} className="w-10/12 px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400" type="text" />
                        <span className="text-sm text-red-500">{errors.application_no && <p>{errors.application_no}</p>}</span>
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-sans">Roll No. <span className="text-red-500 font-bold">*</span></h4>
                        <input name="roll_no" onChange={handleInput} className="w-10/12 px-2 py-2 rounded-lg font-medium font-sans border border-gray-500  text-sm  focus:border-3   bg-white  focus:border-gray-400" type="text" />
                        <span className="text-sm text-red-500">{errors.roll_no && <p>{errors.roll_no}</p>}</span>

                    </div>
                    <div className="space-y-2">
                        <h4 className="font-sans">Upload your College fees receipt <span className="text-red-500 font-bold">*</span></h4>
                        <input name="fees_receipt" onChange={handleFileChange} className="w-10/12 rounded-lg font-medium  text-gray-900 font-sans border-gray-400  border cursor-pointer bg-white  focus:border-gray-400" id="file_input" type="file"/>
                        <span className="text-sm text-red-500">{errors.fees_receipt && <p>{errors.fees_receipt}</p>}</span>
                        
                    </div>
                    <div className="space-y-2 font-sans">
                        <h4 className="font-sans">Programme <span className="text-red-500 font-bold">*</span></h4>
                        <select name="course" onChange={handleInput} id="courses" className="bg-white border px-2 py-2 font-medium cursor-pointer font-sans border-gray-500 text-gray-900 text-sm rounded-lg focus:border-gray-400 w-10/12">
                            <option selected className="font-sans">Select Course</option>
                            <option value="CE" className="font-sans">B.E CE</option>
                              <option value="CSE" className="font-sans">B.E CSE</option>
                              <option value="ECE" className="font-sans">B.E ECE</option>
                              <option value="EEE" className="font-sans">B.E EEE</option>
                              <option value="ME" className="font-sans">B.E ME</option>
                        </select>           
                        <span className="text-sm text-red-500">{errors.course && <p>{errors.course}</p>}</span>
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-sans">Year of Study ( New Admission Select I ) <span className="text-red-500 font-bold">*</span></h4>
                        <select name="year" onChange={handleInput} id="fyear" className="bg-white border px-2 py-2 font-medium cursor-pointer font-sans border-gray-500 text-gray-900 text-sm rounded-lg focus:border-gray-400 w-10/12 ">
                            <option selected>Year</option>
                            <option value="First" className="font-sans">First Year</option>
                        </select>       
                        <span className="text-sm text-red-500">{errors.year && <p>{errors.year}</p>}</span>
                    </div>                    
                </div>
            </div>
            {/* General Details */}
            <div className=" space-y-4 border-b p-10">
                <h6 className="text-2xl text-secondary font-bold tracking-wider ">General Details</h6>
                <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-2">
                    <div className="space-y-2">
                        <h4 className="font-sans">Student Name <span className="text-red-500 font-bold">*</span></h4>
                        <input name="student_name" onChange={handleInput} className="w-10/12 px-1 py-2 rounded-lg font-medium border border-gray-500  text-sm  focus:border-3   bg-white  focus:border-gray-400" type="text" />
                        <span className="text-sm text-red-500">{errors.student_name && <p>{errors.student_name}</p>}</span>

                    </div>
                    <div className="space-y-2">
                        <h4 className="font-sans">Upload your passport size photo <span className="text-red-500 font-bold">*</span></h4>
                        <input name="student_photo" onChange={handleFileChange} className="w-10/12 rounded-lg font-medium text-gray-900 font-sans border-gray-500  border cursor-pointer bg-white  focus:border-gray-400" id="file_input" type="file"/>
                        <span className="text-sm text-red-500">{errors.student_photo && <p>{errors.student_photo}</p>}</span>
                   
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-sans">Date of Birth <span className="text-red-500 font-bold">*</span></h4>
                        <input type="date" name="DOB" onChange={handleInput} className="w-10/12 px-2 py-2 rounded-lg font-medium border border-gray-500 cursor-pointer  text-sm  focus:border-3   bg-white  focus:border-gray-400" placeholder="Select date" />
                        <span className="text-sm text-red-500">{errors.DOB && <p>{errors.DOB}</p>}</span>
                    </div>
                    
                    <div className="space-y-2 font-sans">
                        <h4 className="font-sans">Blood Group <span className="text-red-500 font-bold">*</span></h4>
                        <select id="blood-group" onChange={handleInput} name="blood_group" className="bg-white border px-2 py-2 font-medium cursor-pointer font-sans border-gray-500 text-gray-900 text-sm rounded-lg focus:border-gray-400 w-10/12">
                            <option selected className="font-sans">Select Group</option>
                            <option value="A+" className="font-sans">A+</option>
                            <option value="A-" className="font-sans">A-</option>
                            <option value="B+" className="font-sans">B+</option>
                            <option value="B-" className="font-sans">B-</option>
                            <option value="AB+" className="font-sans">AB+</option>
                            <option value="AB-" className="font-sans">AB-</option>
                            <option value="NA" className="font-sans">NA</option>
                        </select>  
                        <span className="text-sm text-red-500">{errors.blood_group && <p>{errors.blood_group}</p>}</span>

                    </div>
                    <div className="space-y-2">
                        <h4 className="font-sans">Other Blood Group </h4>
                        <input name="other_BG" onChange={handleInput} className="w-10/12 px-1 py-2 rounded-lg font-medium border border-gray-500  text-sm font-serif focus:border-3  placeholder-gray-600 bg-white  focus:border-gray-400" type="text" placeholder="NA" />
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-sans">Gender <span className="text-red-500 font-bold">*</span></h4>
                        <select id="gender" onChange={handleInput} name="gender" className="bg-white border px-2 py-2 font-medium cursor-pointer font-sans border-gray-500 text-gray-900 text-sm rounded-lg focus:border-gray-400 w-10/12 ">
                            <option selected className="font-sans">Select Gender</option>
                            <option value="male" className="font-sans">Male</option>
                            <option value="female" className="font-sans">Female</option>
                        </select>                    
                        <span className="text-sm text-red-500">{errors.gender && <p>{errors.gender}</p>}</span>

                    </div> 
                    <div className="space-y-2">
                        <h4 className="font-sans">Nationality <span className="text-red-500 font-bold">*</span></h4>
                        <select id="nation" onChange={handleInput} name="nationality" className="bg-white border px-2 py-2 font-medium cursor-pointer font-sans border-gray-500 text-gray-900 text-sm rounded-lg focus:border-gray-400 w-10/12 ">
                            <option selected className="font-sans">Select Nationality</option>
                            <option value="india" className="font-sans">India</option>
                            <option value="other" className="font-sans">Other</option>
                        </select>  
                        <span className="text-sm text-red-500">{errors.nationality && <p>{errors.nationality}</p>}</span>

                    </div>
                    <div className="space-y-2">
                        <h4 className="font-sans">Religion <span className="text-red-500 font-bold">*</span></h4>
                        <input name="religion" onChange={handleInput} className="w-10/12 px-2 py-2 rounded-lg font-medium border border-gray-500  text-sm  focus:border-3   bg-white  focus:border-gray-400" type="text" />
                        <span className="text-sm text-red-500">{errors.religion && <p>{errors.religion}</p>}</span>

                    </div> 
                    <div className="space-y-2 font-sans">
                        <h4 className="font-sans">Community <span className="text-red-500 font-bold">*</span></h4>
                        <select name="community" onChange={handleInput} id="community" className="bg-white border px-2 py-2 font-medium cursor-pointer font-sans border-gray-500 text-gray-900 text-sm rounded-lg focus:border-gray-400 w-10/12">
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
                        <span className="text-sm text-red-500">{errors.community && <p>{errors.community}</p>}</span>

                    </div>
                    <div className="space-y-2">
                        <h4 className="font-sans">Caste <span className="text-red-500 font-bold">*</span></h4>
                        <input name="caste" onChange={handleInput} className="w-10/12 px-2 py-2 rounded-lg font-medium border border-gray-500  text-sm  focus:border-3   bg-white  focus:border-gray-400" type="text" />
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-sans">Differently Abled <span className="text-red-500 font-bold">*</span></h4>
                        <select name="differently_abled" onChange={handleInput} id="differently-abled" className="bg-white border px-2 py-2 font-medium cursor-pointer font-sans border-gray-500 text-gray-900 text-sm rounded-lg focus:border-gray-400 w-10/12 ">
                            <option selected className="font-sans">-------</option>
                            <option value="yes" className="font-sans">Yes</option>
                            <option value="no" className="font-sans">No</option>
                        </select>     
                        <span className="text-sm text-red-500">{errors.differently_abled && <p>{errors.differently_abled}</p>}</span>

                    </div> 
                    <div className="space-y-2">
                        <h4 className="font-sans">Student Mobile <span className="text-red-500 font-bold">*</span></h4>
                        <input name="student_mobile_no" onChange={handleInput} className="w-10/12 px-2 py-2 rounded-lg font-medium border border-gray-500  text-sm  focus:border-3   bg-white  focus:border-gray-400" type="text" />
                        <span className="text-sm text-red-500">{errors.student_mobile_no && <p>{errors.student_mobile_no}</p>}</span>

                    </div>  
                    <div className="space-y-2">
                        <h4 className="font-sans">Student Mail <span className="text-red-500 font-bold">*</span></h4>
                        <input name="student_email_id" onChange={handleInput} className="w-10/12 px-2 py-2 rounded-lg font-medium border border-gray-500  text-sm  focus:border-3   bg-white  focus:border-gray-400" type="text" />
                        <span className="text-sm text-red-500">{errors.student_email_id && <p>{errors.student_email_id}</p>}</span>

                    </div>           
                </div>
            </div>
            {/* Parent Details */} 
            <div className=" space-y-4 border-b p-10">
                <h6 className="text-2xl text-secondary font-bold tracking-wider ">Parent Details</h6>
                    <div className="space-y-2">
                        <h4 className="font-sans">Annual Income (In Rs.) <span className="text-red-500 font-bold">*</span></h4>
                        <input name="annual_income" onChange={handleInput} className="w-full px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400" type="text" />
                        <span className="text-sm text-red-500">{errors.annual_income && <p>{errors.annual_income}</p>}</span>

                    </div>
                    <div className="grid lg:grid-cols-5 md:grid-cols-1 gap-2">
                        {/* Father's Details */}
                        <div className="space-y-2">
                            <h4 className="font-sans">Father<span>&#39;</span>s Name</h4>
                            <input name="father_name" disabled={checkboxState.father} onChange={handleInput} className={`w-10/12 px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400 ${checkboxState.father ? 'opacity-50' : ''}`} type="text" />
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-sans">Father<span>&#39;</span>s Occupation</h4>
                            <input name="father_occupation" disabled={checkboxState.father} onChange={handleInput} className={`w-10/12 px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400 ${checkboxState.father ? 'opacity-50' : ''}`} type="text" />
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-sans">Father<span>&#39;</span>s Mobile No.</h4>
                            <input name="father_mobile_no" disabled={checkboxState.father} onChange={handleInput} className={`w-10/12 px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400 ${checkboxState.father ? 'opacity-50' : ''}`} type="text" />
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-sans">Father<span>&#39;</span>s Mail</h4>
                            <input name="father_email_id" disabled={checkboxState.father} onChange={handleInput} className={`w-10/12 px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400 ${checkboxState.father ? 'opacity-50' : ''}`} type="text" />
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" checked={checkboxState.father} onChange={()=>handleCheckbox('father')}  />
                            <p className="font-sans p-2 text-sm">Click here if Father<span>&#39;</span>s Details is Not Applicable</p>
                        </div>
                        {/* Mother's Details */}
                        <div className="space-y-2">
                            <h4 className="font-sans">Mother<span>&#39;</span>s Name</h4>
                            <input name="mother_name" disabled={checkboxState.mother} onChange={handleInput} className={`w-10/12 px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400 ${checkboxState.mother ? 'opacity-50' : ''}`} type="text" />
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-sans">Mother<span>&#39;</span>s Occupation</h4>
                            <input name="mother_occupation" disabled={checkboxState.mother} onChange={handleInput} className={`w-10/12 px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400 ${checkboxState.mother ? 'opacity-50' : ''}`} type="text" />
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-sans">Mother<span>&#39;</span>s Mobile No.</h4>
                            <input name="mother_mobile_no" disabled={checkboxState.mother} onChange={handleInput} className={`w-10/12 px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400 ${checkboxState.mother ? 'opacity-50' : ''}`} type="text" />
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-sans">Mother<span>&#39;</span>s Mail</h4>
                            <input name="mother_mail_id" disabled={checkboxState.mother} onChange={handleInput} className={`w-10/12 px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400 ${checkboxState.mother ? 'opacity-50' : ''}`} type="text" />
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" checked={checkboxState.mother} onChange={() => handleCheckbox('mother')} />
                            <p className="font-sans p-2 text-sm">Click here if Mother<span>&#39;</span>s Details is Not Applicable</p>
                        </div>
                        {/* Guardian Details */}
                        <div className="space-y-2">
                            <h4 className="font-sans">Guardian<span>&#39;</span>s Name</h4>
                            <input name="guardian_name" disabled={checkboxState.guardian} onChange={handleInput} className={`w-10/12 px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400 ${checkboxState.guardian ? 'opacity-50' : ''}`} type="text" />
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-sans">Guardian<span>&#39;</span>s Occupation</h4>
                            <input name="guardian_occupation" disabled={checkboxState.guardian} onChange={handleInput} className={`w-10/12 px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400 ${checkboxState.guardian ? 'opacity-50' : ''}`} type="text" />
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-sans">Guardian<span>&#39;</span>s Mobile No.</h4>
                            <input name="guardian_mobile_no" disabled={checkboxState.guardian} onChange={handleInput} className={`w-10/12 px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400 ${checkboxState.guardian ? 'opacity-50' : ''}`} type="text" />
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-sans">Guardian<span>&#39;</span>s Mail</h4>
                            <input name="guardian_email_id" disabled={checkboxState.guardian} onChange={handleInput} className={`w-10/12 px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400 ${checkboxState.guardian ? 'opacity-50' : ''}`} type="text" />
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" checked={checkboxState.guardian} onChange={() => handleCheckbox('guardian')} />
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
                                <input name="permanent_address" onChange={handleInput} className="w-10/12 px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400" type="text" />
                                <span className="text-sm text-red-500">{errors.permanent_address && <p>{errors.permanent_address}</p>}</span>

                            </div>
                            <div className="space-y-2">
                                <h4 className="font-sans">City. <span className="text-red-500 font-bold">*</span></h4>
                                <input name="permanent_city" onChange={handleInput} className="w-10/12 px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400" type="text" />
                                <span className="text-sm text-red-500">{errors.permanent_city && <p>{errors.permanent_city}</p>}</span>

                            </div>
                            <div className="space-y-2">
                                <h4 className="font-sans">State. <span className="text-red-500 font-bold">*</span></h4>
                                <input name="permanent_state" onChange={handleInput} className="w-10/12 px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400" type="text" />
                                <span className="text-sm text-red-500">{errors.permanent_state && <p>{errors.permanent_state}</p>}</span>

                            </div>
                            <div className="space-y-2">
                                <h4 className="font-sans">Country. <span className="text-red-500 font-bold">*</span></h4>
                                <input name="permanent_country" onChange={handleInput} className="w-10/12 px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400" type="text" />
                                <span className="text-sm text-red-500">{errors.permanent_country && <p>{errors.permanent_country}</p>}</span>

                            </div>
                            <div className="space-y-2">
                                <h4 className="font-sans">Pin Code. <span className="text-red-500 font-bold">*</span></h4>
                                <input name="permanent_pincode" onChange={handleInput} className="w-10/12 px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400" type="text" />
                                <span className="text-sm text-red-500">{errors.permanent_pincode && <p>{errors.permanent_pincode}</p>}</span>

                            </div>
                        </div>
                    </div>
                    {/* Communication Address */}
                    <div>
                        <h6 className="text-2xl text-secondary font-bold tracking-wide">Communication Address</h6>
                        <div className="flex items-center">
                            <input type="checkbox" checked={sameAsPermanent} onChange={handleCheckboxChange} />
                            <p className="font-sans p-2 text-sm">Same as Permanent Address</p>
                        </div>

                        <div className="grid lg:grid-cols-5 md:grid-cols-1 gap-2">
                            <div className="space-y-2">
                                <h4 className="font-sans">Address with Door No. <span className="text-red-500 font-bold">*</span></h4>
                                <input name="communication_address" onChange={handleInput} disabled={sameAsPermanent} className={`w-10/12 px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400 ${sameAsPermanent ? 'opacity-50' : ''}`} type="text" />
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-sans">City. <span className="text-red-500 font-bold">*</span></h4>
                                <input name="communication_city" onChange={handleInput} disabled={sameAsPermanent} className={`w-10/12 px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400 ${sameAsPermanent ? 'opacity-50' : ''}`} type="text" />

                            </div>
                            <div className="space-y-2">
                                <h4 className="font-sans">State. <span className="text-red-500 font-bold">*</span></h4>
                                <input name="communication_state" onChange={handleInput} disabled={sameAsPermanent} className={`w-10/12 px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400 ${sameAsPermanent ? 'opacity-50' : ''}`} type="text" />
                            
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-sans">Country. <span className="text-red-500 font-bold">*</span></h4>
                                <input name="communication_country" onChange={handleInput} disabled={sameAsPermanent} className={`w-10/12 px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400 ${sameAsPermanent ? 'opacity-50' : ''}`} type="text" />

                            </div>
                            <div className="space-y-2">
                                <h4 className="font-sans">Pin Code. <span className="text-red-500 font-bold">*</span></h4>
                                <input name="communication_pincode" onChange={handleInput} disabled={sameAsPermanent} className={`w-10/12 px-1 py-2 rounded-lg font-sans font-medium border border-gray-400  text-sm  focus:border-3   bg-white  focus:border-gray-400 ${sameAsPermanent ? 'opacity-50' : ''}`} type="text" />
                            
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
                <button type="submit" className="bg-secondary  hover:bg-primary text-white font-bold py-2 px-4 rounded"> Submit </button>
                </div>
            </div>
            </form>

        </div>
    </div>
        
    </>
  )
}
