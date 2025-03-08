"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Separator } from "./ui/separator";
import { Textarea } from "./ui/textarea";
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "./ui/extension/multi-select";
import { Button } from "./ui/button";
import ResumeUpload from "./resume_upload";
import { Checkbox } from "./ui/checkbox";

const daysOfWeek = [
  { label: "Sunday", value: "sunday" },
  { label: "Monday", value: "monday" },
  { label: "Tuesday", value: "tuesday" },
  { label: "Wednesday", value: "wednesday" },
  { label: "Thursday", value: "thursday" },
  { label: "Friday", value: "friday" },
  { label: "Saturday", value: "saturday" },
];

const JobApplication = () => {
  const [value, setValue] = useState<string[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");

  return (
    <Tabs defaultValue="application-info">
      <TabsList>
        <TabsTrigger value="application-info">
          Application Information
        </TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="references">References</TabsTrigger>
        <TabsTrigger value="previous-employment">
          Previous Employment
        </TabsTrigger>
        <TabsTrigger value="military-service">Military Service</TabsTrigger>
        <TabsTrigger value="resume-upload">Resume upload</TabsTrigger>
        <TabsTrigger value="disclaimer-signature">
          Disclaimer & Signature
        </TabsTrigger>
      </TabsList>
      <form className="" action={""}>
        <TabsContent value="application-info">
          <Card className="p-6">
            <h3 className="text-2xl font-semibold mb-6">
              Application Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label>Full Name</Label>
                <Input
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <Label>Address</Label>
                <Input
                  name="address"
                  type="text"
                  placeholder="Enter your address"
                />
              </div>

              <div>
                <Label>Phone Number</Label>
                <Input
                  name="phoneNumber"
                  type="tel"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <Label>Email</Label>
                <Input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <Label>Date Available</Label>
                <Input
                  name="dateAvailable"
                  type="text"
                  placeholder="Enter available date"
                />
              </div>

              <div>
                <Label>Social Security Number</Label>
                <Input name="ssn" type="text" placeholder="Enter your SSN" />
              </div>

              <div>
                <Label>Desired Salary</Label>
                <Input
                  name="desiredSalary"
                  type="text"
                  placeholder="Enter desired salary"
                />
              </div>

              <div>
                <Label>Position Applied For</Label>
                <Input
                  name="positionAppliedFor"
                  type="text"
                  placeholder="Enter position name"
                />
              </div>

              <div>
                <Label>Are you a U.S. citizen?</Label>
                <Select name="usCitizen">
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>If no, are you authorized to work in the U.S.?</Label>
                <Select name="authorizedToWork">
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Have you ever worked for this company?</Label>
                <Select name="workedForCompany">
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>If yes, when?</Label>
                <Input
                  name="previousWorkDates"
                  type="text"
                  placeholder="Enter date(s)"
                />
              </div>

              <div>
                <Label>Have you ever been convicted of a felony?</Label>
                <Select name="felonyRecord">
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="md:col-span-2">
                <Label>If yes, explain</Label>
                <Textarea
                  name="felonyExplanation"
                  placeholder="Provide details if applicable"
                />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="education">
          <Card className="p-6">
            <h3 className="text-2xl font-semibold mb-6">Education</h3>

            <div className="space-y-8">
              {/* High School Section */}
              <div>
                <h4 className="text-lg font-medium mb-4">High School</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label>High School Name</Label>
                    <Input
                      name="highSchoolName"
                      type="text"
                      placeholder="Enter high school name"
                    />
                  </div>
                  <div>
                    <Label>Address</Label>
                    <Input
                      name="highSchoolAddress"
                      type="text"
                      placeholder="Enter school address"
                    />
                  </div>

                  <div>
                    <Label>Duration</Label>
                    <div className="flex gap-4">
                      <Input
                        name="highSchoolFrom"
                        type="text"
                        className="w-1/2"
                        placeholder="From"
                      />
                      <Input
                        name="highSchoolTo"
                        type="text"
                        className="w-1/2"
                        placeholder="To"
                      />
                    </div>
                  </div>

                  <div>
                    <Label>Did you graduate?</Label>
                    <Select name="highSchoolGraduated">
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Diploma</Label>
                    <Input
                      name="highSchoolDiploma"
                      type="text"
                      placeholder="Enter diploma received"
                    />
                  </div>
                </div>
              </div>

              <Separator className="border-gray-300" />

              {/* College Section */}
              <div>
                <h4 className="text-lg font-medium mb-4">College</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label>College Name</Label>
                    <Input
                      name="collegeName"
                      type="text"
                      placeholder="Enter college name"
                    />
                  </div>
                  <div>
                    <Label>Address</Label>
                    <Input
                      name="collegeAddress"
                      type="text"
                      placeholder="Enter school address"
                    />
                  </div>

                  <div>
                    <Label>Duration</Label>
                    <div className="flex gap-4">
                      <Input
                        name="collegeFrom"
                        type="text"
                        className="w-1/2"
                        placeholder="From"
                      />
                      <Input
                        name="collegeTo"
                        type="text"
                        className="w-1/2"
                        placeholder="To"
                      />
                    </div>
                  </div>

                  <div>
                    <Label>Did you graduate?</Label>
                    <Select name="collegeGraduated">
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Degree</Label>
                    <Input
                      name="collegeDegree"
                      type="text"
                      placeholder="Enter degree earned"
                    />
                  </div>
                </div>
              </div>

              <Separator className="border-gray-300" />

              {/* Other Education Section */}
              <div>
                <h4 className="text-lg font-medium mb-4">Other Education</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label>Institution Name</Label>
                    <Input
                      name="otherInstitutionName"
                      type="text"
                      placeholder="Enter institution name"
                    />
                  </div>
                  <div>
                    <Label>Address</Label>
                    <Input
                      name="otherInstitutionAddress"
                      type="text"
                      placeholder="Enter institution address"
                    />
                  </div>

                  <div>
                    <Label>Duration</Label>
                    <div className="flex gap-4">
                      <Input
                        name="otherInstitutionFrom"
                        type="text"
                        className="w-1/2"
                        placeholder="From"
                      />
                      <Input
                        name="otherInstitutionTo"
                        type="text"
                        className="w-1/2"
                        placeholder="To"
                      />
                    </div>
                  </div>

                  <div>
                    <Label>Did you graduate?</Label>
                    <Select name="otherInstitutionGraduated">
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Degree</Label>
                    <Input
                      name="otherInstitutionDegree"
                      type="text"
                      placeholder="Enter degree earned"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="references">
          <Card className="p-6">
            <h3 className="text-2xl font-semibold mb-4">References</h3>
            <p className="text-gray-500 mb-6">
              List three professional references.
            </p>

            <div className="space-y-8">
              {[1, 2, 3].map((index) => (
                <div key={index} className="space-y-6">
                  <h4 className="text-lg font-medium">Reference {index}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label>Full Name</Label>
                      <Input
                        type="text"
                        name={`reference-${index}-fullName`}
                        placeholder="Enter full name"
                      />
                    </div>
                    <div>
                      <Label>Relationship</Label>
                      <Input
                        type="text"
                        name={`reference-${index}-relationship`}
                        placeholder="Enter relationship"
                      />
                    </div>
                    <div>
                      <Label>Company</Label>
                      <Input
                        type="text"
                        name={`reference-${index}-company`}
                        placeholder="Enter company name"
                      />
                    </div>
                    <div>
                      <Label>Phone</Label>
                      <Input
                        type="tel"
                        name={`reference-${index}-phone`}
                        placeholder="Enter phone number"
                      />
                    </div>
                    <div>
                      <Label>Address</Label>
                      <Input
                        type="text"
                        name={`reference-${index}-address`}
                        placeholder="Enter address"
                      />
                    </div>
                    <div>
                      <Label>Email</Label>
                      <Input
                        type="email"
                        name={`reference-${index}-email`}
                        placeholder="Enter email"
                      />
                    </div>
                  </div>

                  {index < 3 && <Separator className="border-gray-300" />}
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="previous-employment">
          <Card className="p-6">
            <h3 className="text-2xl font-semibold mb-4">Previous Employment</h3>
            <p className="text-gray-500 mb-6">List three previous employers.</p>

            <div className="space-y-8">
              {[1, 2, 3].map((index) => (
                <div key={index} className="space-y-6">
                  <h4 className="text-lg font-medium">Previous Job {index}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label>Company</Label>
                      <Input
                        type="text"
                        name={`previousJob-${index}-company`}
                        placeholder="Enter company name"
                      />
                    </div>
                    <div>
                      <Label>Phone</Label>
                      <Input
                        type="tel"
                        name={`previousJob-${index}-phone`}
                        placeholder="Enter phone number"
                      />
                    </div>
                    <div>
                      <Label>Address</Label>
                      <Input
                        type="text"
                        name={`previousJob-${index}-address`}
                        placeholder="Enter company address"
                      />
                    </div>
                    <div>
                      <Label>Supervisor</Label>
                      <Input
                        type="text"
                        name={`previousJob-${index}-supervisor`}
                        placeholder="Enter supervisor's name"
                      />
                    </div>
                    <div>
                      <Label>Job Title</Label>
                      <Input
                        type="text"
                        name={`previousJob-${index}-jobTitle`}
                        placeholder="Enter job title"
                      />
                    </div>
                    <div className="flex gap-4">
                      <div className="w-1/2">
                        <Label>From</Label>
                        <Input type="text" name={`previousJob-${index}-from`} />
                      </div>
                      <div className="w-1/2">
                        <Label>To</Label>
                        <Input type="text" name={`previousJob-${index}-to`} />
                      </div>
                    </div>
                    <div className="col-span-2">
                      <Label>Responsibilities</Label>
                      <Textarea
                        name={`previousJob-${index}-responsibilities`}
                        placeholder="Briefly describe your responsibilities"
                      />
                    </div>
                    <div className="col-span-2">
                      <Label>May we contact your previous supervisor?</Label>
                      <Select name={`previousJob-${index}-contactSupervisor`}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {index < 3 && <Separator className="border-gray-300" />}
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="military-service">
          <Card className="p-6">
            <h3 className="text-2xl font-semibold mb-4">Military Service</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label>Branch</Label>
                <Input type="text" placeholder="Enter military branch" />
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <Label>From</Label>
                  <Input type="text" />
                </div>
                <div className="w-1/2">
                  <Label>To</Label>
                  <Input type="text" />
                </div>
              </div>
              <div>
                <Label>Rank at Discharge</Label>
                <Input type="text" placeholder="Enter rank at discharge" />
              </div>
              <div>
                <Label>Type of Discharge</Label>
                <Input type="text" placeholder="Enter type of discharge" />
              </div>
              <div className="col-span-2">
                <Label>If other than honorable, explain</Label>
                <Textarea placeholder="Provide explanation (if applicable)" />
              </div>
              <div className="col-span-2">
                <Label>Availability</Label>
                <MultiSelector
                  values={value}
                  onValuesChange={setValue}
                  loop={false}
                >
                  <MultiSelectorTrigger>
                    <MultiSelectorInput placeholder="Select available days" />
                  </MultiSelectorTrigger>
                  <MultiSelectorContent>
                    <MultiSelectorList>
                      {daysOfWeek.map((day, i) => (
                        <MultiSelectorItem key={i} value={day.value}>
                          {day.label}
                        </MultiSelectorItem>
                      ))}
                    </MultiSelectorList>
                  </MultiSelectorContent>
                </MultiSelector>
              </div>{" "}
              <Button type="submit" variant={"outline"}>
                Submit
              </Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="resume-upload">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Resume Upload</h3>
            <ResumeUpload
              message={"Upload your resume (PDF or Word)"}
              file={file}
              setFile={setFile}
              preview={preview}
              setPreview={setPreview}
            />
          </Card>
        </TabsContent>

        <TabsContent value="disclaimer-signature">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">
              Disclaimer & Signature
            </h3>

            <div className="space-y-4">
              <p className="text-gray-700 md:max-w-3xl">
                I certify that my answers are true and complete to the best of
                my knowledge. If this application leads to employment, I
                understand that false or misleading information in my
                application or interview may result in my release.
              </p>

              <div className="flex items-center space-x-2">
                <Checkbox id="agreement" />
                <Label htmlFor="agreement">
                  I agree to the terms stated above.
                </Label>
              </div>
            </div>
          </Card>
        </TabsContent>
      </form>
    </Tabs>
  );
};

export default JobApplication;
