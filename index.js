function canAttendMeetings(intervals) {
    // Given an array of intervals determine if a person could attend all meetings

    intervals.sort(function(a,b) {return a[0]-b[0]});
   
    for(let i = 0; i < intervals.length - 1; i++) {
       let current = intervals[i];
       let next = intervals[i+1];
       if(current[1] > next[0]) {
          return false;    
       }; 
    };
     
    return true; 
}

module.exports = {
   canAttendMeetings,
}