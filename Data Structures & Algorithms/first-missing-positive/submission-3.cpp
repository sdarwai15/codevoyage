class Solution {
public:
    int firstMissingPositive(vector<int>& nums) {
        int n=nums.size();

       unordered_map<int,int>mp;


        int positivecount=0;


        for(auto it:nums){

            if(it>0){
                mp[it]++;
                positivecount++;
            }
        }


  for(int i=1;i<=positivecount+1;i++){


    if(!mp[i])return i;
  }







    }
};