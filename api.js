/**
* XXX: faking an LMS provided SCORM API
* Include this before `getAPI` is called
*/
window.API = (function (){
  var data = {
    "cmi.core.student_id": "000000"
    , "cmi.core.student_name": "Mangs, Sune"
    , "cmi.core.lesson_status": "not attempted"
    , "cmi.core.lesson_location": ""
  };
  return {
    "LMSInitialize": function() { return "true"; }
    , "LMSCommit": function() { return "true"; }
    , "LMSFinish": function() { return "true"; }
    , "LMSGetValue": function(model) { return data[model] || ""; }
    , "LMSSetValue": function(model, value) {
        data[model] = value;
        return "true";
      }
    , "LMSGetLastError": function () { return "0"; }
    , "LMSGetErrorString": function () { return "No error"; }
    , "LMSGetDiagnostic": function () { return "No error"; }
  };
}());
