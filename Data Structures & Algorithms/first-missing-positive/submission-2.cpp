class Solution {
public:
    int firstMissingPositive(vector<int>& nums) {
        

        int n=nums.size();

        int ans=INT_MAX;

sort(nums.begin(),nums.end());
int s=0;
        for(int i =0;i<n;i++){

                if(s==0&&nums[i]>1){
return 1;
                }

                if(nums[i]>0)s++;
            if(i+1<n&&nums[i]>0&&nums[i+1]>nums[i]+1){
                return nums[i]+1;
            }
        }


if(nums.back()>0)return nums.back()+1;
else return 1;

    }
};