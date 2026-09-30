// ACL Script: Restrict access based on record field value
answer = checkRecordAccess(current, gs.getUser());

function checkRecordAccess(currentRecord, currentUser) {
    // Condition 1: If record is marked 'Confidential', only Admin or Assigned User can view
    if (currentRecord.u_confidential == true) {
        if (currentUser.hasRole('admin') || currentRecord.u_assigned_to == currentUser.getID()) {
            return true; // Access Granted
        }
        return false; // Access Denied
    }
    
    // Condition 2: Default access for public/regular records
    return true;
}