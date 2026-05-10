const PROB_DATA = {
  'Two Sum': {
    pattern: 'Hash Map — One Pass',
    logic: [
      'For each number compute complement = target - n',
      'Check the seen map in O(1) instead of a nested loop',
      'Store each value→index pair as you scan left to right',
      'One pass replaces brute-force O(n²) to O(n)'
    ],
    visual:
`nums=[2,7,11,15]  target=9

i=0  n=2  need=7  seen={}      → not found, store {2:0}
i=1  n=7  need=2  seen={2:0}   → FOUND! return [0,1]

Rule: store what you've seen, look up what you need`
  },

  'Valid Parentheses': {
    pattern: 'Stack — Push/Pop Matching',
    logic: [
      'Push every opening bracket onto the stack',
      'On a closing bracket, pop and verify it matches',
      'If stack is empty on pop, or top mismatches → invalid',
      'Valid iff stack is empty at the end'
    ],
    visual:
`s = "([{}])"

ch  action        stack
(   push          [(]
[   push          [(  [
{   push          [(  [  {
}   pop+match {   [(  [
]   pop+match [   [(
)   pop+match (   []   ← empty = VALID`
  },

  'Reverse Linked List': {
    pattern: 'Three Pointers — In-Place Reversal',
    logic: [
      'Keep three pointers: prev (None), curr (head), nxt',
      'Save nxt before breaking the link: nxt = curr.next',
      'Flip the arrow: curr.next = prev',
      'Advance both prev and curr one step'
    ],
    visual:
`Before:  None  1 → 2 → 3 → 4 → None
               ^
             head

Step 1:  None ← 1   2 → 3 → 4
         prev curr  nxt

Step 2:  None ← 1 ← 2   3 → 4
                    prev curr nxt

After:   None ← 1 ← 2 ← 3 ← 4
                              ^
                            new head (prev)`
  },

  'Best Time to Buy/Sell Stock': {
    pattern: 'Greedy — Track Running Minimum',
    logic: [
      'Track the minimum price seen so far as you scan',
      'At each price compute profit = price - min_so_far',
      'Update global max profit if current profit is larger',
      'No need to look back; one pass is sufficient'
    ],
    visual:
`prices = [7, 1, 5, 3, 6, 4]

day  price  min  profit  best
 0    7      7    0       0
 1    1      1    0       0   ← new min
 2    5      1    4       4   ← new best
 3    3      1    2       4
 4    6      1    5       5   ← new best
 5    4      1    3       5`
  },

  'Longest Substring No Repeat': {
    pattern: 'Sliding Window — Shrink on Duplicate',
    logic: [
      'Expand right pointer across the string',
      'Store each character\'s most recent index in a map',
      'On duplicate: jump left pointer past the old occurrence',
      'Window length = right - left + 1; track the maximum'
    ],
    visual:
`s = "a b c a b c b b"
      0 1 2 3 4 5 6 7

L=0 R=0  win=[a]       len=1
L=0 R=2  win=[a,b,c]   len=3
R=3: 'a' seen at 0 → L jumps to 1
L=1 R=3  win=[b,c,a]   len=3
R=4: 'b' seen at 1 → L jumps to 2
L=2 R=4  win=[c,a,b]   len=3  ← max=3`
  },

  'LRU Cache': {
    pattern: 'Hash Map + Doubly Linked List',
    logic: [
      'Hash map gives O(1) lookup; linked list tracks recency order',
      'Most-recent node sits at the tail, least-recent at head',
      'On get/put: move node to tail (mark as recently used)',
      'On capacity overflow: evict the head node (least recently used)'
    ],
    visual:
`cap=3, ops: put(1), put(2), put(3), get(1), put(4)

After put(1,2,3):  HEAD ↔ [1] ↔ [2] ↔ [3] ↔ TAIL
get(1) → move 1 to tail:
                   HEAD ↔ [2] ↔ [3] ↔ [1] ↔ TAIL
put(4) → evict head [2]:
                   HEAD ↔ [3] ↔ [1] ↔ [4] ↔ TAIL`
  },

  'Number of Islands': {
    pattern: 'DFS Flood Fill — Sink Visited Cells',
    logic: [
      'Scan grid; on every unvisited \'1\' increment island count',
      'DFS from that cell: mark all connected \'1\'s as \'0\'',
      'Sinking cells avoids a separate visited set',
      'After DFS the whole island is gone; continue scanning'
    ],
    visual:
`grid:          after DFS from (0,0)   after DFS from (1,3)
1 1 0 0        0 0 0 0                0 0 0 0
1 0 0 1   →   0 0 0 1        →       0 0 0 0
0 0 1 1        0 0 1 1                0 0 0 0
               island #1=done         island #2=done  total=2`
  },

  'Merge K Sorted Lists': {
    pattern: 'Min Heap — Always Extract Smallest',
    logic: [
      'Push the first node of each list into a min-heap',
      'Pop the smallest node, append it to the result list',
      'If that node has a next, push it into the heap',
      'Repeat until the heap is empty'
    ],
    visual:
`lists: [1→4→5]  [1→3→4]  [2→6]

heap: [(1,A), (1,B), (2,C)]
pop 1(A) → push 4(A) → result: 1
heap: [(1,B), (2,C), (4,A)]
pop 1(B) → push 3(B) → result: 1→1
heap: [(2,C), (3,B), (4,A)]
pop 2(C) → push 6(C) → result: 1→1→2  ...`
  },

  'Word Break': {
    pattern: 'Bottom-Up DP — Reachable Positions',
    logic: [
      'dp[i] = True means s[0..i] can be segmented',
      'dp[0] = True (empty string is always valid base case)',
      'For each i, try all j < i: if dp[j] and s[j:i] in dict → dp[i]=True',
      'Answer is dp[len(s)]'
    ],
    visual:
`s="leetcode"  words=["leet","code"]

idx:  0  1  2  3  4  5  6  7  8
dp:   T  F  F  F  T  F  F  F  T
          ←"leet"→   ←"code"→

dp[4]: j=0,dp[0]=T,s[0:4]="leet" ✓ → dp[4]=T
dp[8]: j=4,dp[4]=T,s[4:8]="code" ✓ → dp[8]=T`
  },

  'Trapping Rain Water': {
    pattern: 'Two Pointers — Process Shorter Side First',
    logic: [
      'Water at any bar = min(leftMax, rightMax) - height[i]',
      'Two pointers from both ends; process the shorter side',
      'The shorter side\'s max is the bottleneck regardless of right side',
      'Track lmax and rmax independently as pointers move inward'
    ],
    visual:
`h = [0,1,0,2,1,0,1,3,2,1,2,1]
     L                         R

lmax=0, rmax=1 → h[R]=1=rmax, move R left
lmax=0, rmax=2 → h[L]=0 < lmax? no, update lmax=0 move L
...
water accumulates on low-height indices between peaks`
  },

  'Find Duplicate Number': {
    pattern: 'Floyd\'s Cycle Detection — Array as Linked List',
    logic: [
      'Treat each value as a pointer to the next index',
      'Duplicate value → two indices point to same next → cycle',
      'Phase 1: slow/fast pointers meet inside the cycle',
      'Phase 2: reset slow to start; advance both by 1 → meet at duplicate'
    ],
    visual:
`nums = [1,3,4,2,2]   index: 0→1→3→2→4→2 (cycle!)

Phase 1 (find intersection):
  slow: 0→1→3→2→4   fast: 0→3→4→3→4  meet at 4? ...

Phase 2 (find cycle entrance = duplicate):
  slow=nums[0], fast=meeting point
  advance both by 1 until equal → that value is the duplicate`
  },

  'Producer-Consumer': {
    pattern: 'Thread-Safe Queue — Blocking Put/Get',
    logic: [
      'queue.Queue internally uses a mutex + condition variables',
      'put() blocks when the queue is full (maxsize reached)',
      'get() blocks when the queue is empty (no items)',
      'Both operations are atomic — no manual locking needed'
    ],
    visual:
`Producer thread:          Consumer thread:
  for i in 0..9:            while True:
    buffer.put(i)  ←━━━━━→   item = buffer.get()
    (blocks if full)           task_done()
                               (blocks if empty)

buffer capacity = 5 → producer throttled automatically`
  },

  'Binary Search': {
    pattern: 'Divide & Conquer — Halve Search Space',
    logic: [
      'Maintain left and right pointers over the sorted array',
      'Compute mid = left + (right - left) // 2  (avoids overflow)',
      'If nums[mid] == target → found; < target → move left up; > target → move right down',
      'Loop ends when left > right meaning target not present'
    ],
    visual:
`arr = [1, 3, 5, 7, 9, 11, 13]   target = 7

L=0 R=6  mid=3  arr[3]=7 == target → return 3

Another run, target=6:
L=0 R=6  mid=3  arr[3]=7 > 6  → R=2
L=0 R=2  mid=1  arr[1]=3 < 6  → L=2
L=2 R=2  mid=2  arr[2]=5 < 6  → L=3
L=3 > R=2 → return -1`
  },

  'Merge Intervals': {
    pattern: 'Sort + Greedy — Extend Current Interval',
    logic: [
      'Sort intervals by start time',
      'Initialize result with the first interval',
      'For each next interval: if it overlaps result\'s last end → extend end',
      'Otherwise no overlap → append as a new interval'
    ],
    visual:
`intervals = [[1,3],[2,6],[8,10],[15,18]]
sorted:      [[1,3],[2,6],[8,10],[15,18]]

merged=[[1,3]]
[2,6]: 2<=3 overlap → extend to [1,6]
[8,10]: 8>6 no overlap → append  merged=[[1,6],[8,10]]
[15,18]: 15>10 → append  merged=[[1,6],[8,10],[15,18]]`
  },

  'Coin Change': {
    pattern: 'Bottom-Up DP — Build From Amount 0',
    logic: [
      'dp[a] = fewest coins to make amount a; dp[0]=0, rest=Inf',
      'For every coin, update all amounts it can contribute to',
      'dp[amt] = min(dp[amt], dp[amt-coin] + 1)',
      'If dp[amount] is still Inf → impossible, return -1'
    ],
    visual:
`coins=[1,2,5]  amount=6

amt:  0  1  2  3  4  5  6
dp:   0  ∞  ∞  ∞  ∞  ∞  ∞

coin=1: dp=[0,1,2,3,4,5,6]
coin=2: dp=[0,1,1,2,2,3,3]
coin=5: dp=[0,1,1,2,2,1,2]  ← ans=2  (5+1)`
  },

  'Kth Largest Element': {
    pattern: 'QuickSelect — Partial Partition',
    logic: [
      'Pick a random pivot; partition into greater, equal, less',
      'If k <= len(greater) → recurse into greater partition',
      'If k <= len(greater)+len(equal) → pivot IS the answer',
      'Otherwise recurse into less with adjusted k'
    ],
    visual:
`nums=[3,2,1,5,6,4]  k=2 (2nd largest)

pivot=3 → greater=[5,6], equal=[3], less=[1,2,4]
k=2 <= len(greater)=2 → recurse([5,6], k=2)

pivot=6 → greater=[],  equal=[6], less=[5]
k=2 > 0+1=1 → recurse([5], k=1)
pivot=5 → equal=[5], k=1<=0+1 → return 5  ← 2nd largest`
  },

  'Contains Duplicate': {
    pattern: 'Hash Set — O(1) Membership Check',
    logic: [
      'Convert array to set which de-duplicates automatically',
      'If len(set) < len(array) → at least one duplicate exists',
      'Alternative: iterate and check seen set manually (early exit)',
      'One-liner: return len(nums) != len(set(nums))'
    ],
    visual:
`nums = [1, 2, 3, 1]
set   = {1, 2, 3}

len(nums)=4  len(set)=3  → 4 != 3 → True (has duplicate)

nums = [1, 2, 3, 4]
set   = {1, 2, 3, 4}
len(nums)=4  len(set)=4  → equal → False (no duplicate)`
  },

  'Product of Array Except Self': {
    pattern: 'Prefix × Suffix Products — No Division',
    logic: [
      'Pass 1 left→right: res[i] = product of all elements before i',
      'Pass 2 right→left: multiply res[i] by product of all elements after i',
      'Both passes use a running product variable; no extra arrays needed',
      'Result[i] = prefix[i] × suffix[i] without using index i'
    ],
    visual:
`nums = [1, 2, 3, 4]

prefix pass (L→R):  res = [1, 1, 2, 6]
                    pre:   1  1  2  6

suffix pass (R→L):  multiply by running post
  i=3: res[3]=6×1=6,  post=4
  i=2: res[2]=2×4=8,  post=12
  i=1: res[1]=1×12=12, post=24
  i=0: res[0]=1×24=24

result = [24, 12, 8, 6]`
  },

  'Maximum Subarray': {
    pattern: 'Kadane\'s Algorithm — Reset on Negative',
    logic: [
      'curr = best sum ending at current index',
      'If curr + n < n, starting fresh at n is better → curr = max(n, curr+n)',
      'Track global max across all positions',
      'One pass, O(1) space — classic greedy DP hybrid'
    ],
    visual:
`nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

idx    -2   1  -3   4  -1   2   1  -5   4
curr   -2   1  -2   4   3   5   6   1   5
max    -2   1   1   4   4   5   6   6   6

Answer: 6  (subarray [4,-1,2,1])`
  },

  'Maximum Product Subarray': {
    pattern: 'Track Both Min and Max — Negatives Flip Signs',
    logic: [
      'A negative × negative = positive, so track both min and max products',
      'At each element: candidates are n, maxProd×n, minProd×n',
      'New max = max of all three; new min = min of all three',
      'Global result = max seen so far'
    ],
    visual:
`nums = [2, 3, -2, 4]

idx    2   3   -2   4
max    2   6   -2   4   ← -2 resets
min    2   3  -12  -8
res    2   6    6   6

Answer: 6  (subarray [2,3])`
  },

  'Find Minimum in Rotated Sorted Array': {
    pattern: 'Binary Search — Compare Mid to Right',
    logic: [
      'If nums[mid] > nums[right], the minimum is in the right half',
      'Otherwise the minimum is in the left half (including mid)',
      'Narrow the window until left == right → that\'s the minimum',
      'Rotation pivot is always where the big-to-small drop occurs'
    ],
    visual:
`arr = [4, 5, 6, 7, 0, 1, 2]
       L           M        R

mid=7 > right=2 → min is RIGHT of mid → L = M+1
arr = [0, 1, 2]
       L  M  R
mid=1 < right=2 → min is LEFT side → R = M
arr = [0]
       L=R → return nums[L] = 0`
  },

  'Search in Rotated Sorted Array': {
    pattern: 'Binary Search — Identify Sorted Half First',
    logic: [
      'One half of the rotated array is always fully sorted',
      'Check if nums[left..mid] is sorted: nums[left] <= nums[mid]',
      'If target falls in the sorted half → search there; else search other half',
      'Standard binary search converges even with rotation'
    ],
    visual:
`arr=[4,5,6,7,0,1,2]  target=0

L=0 R=6 mid=3: nums[3]=7
  left half [4,5,6,7] is sorted (4<=7)
  target=0 NOT in [4,7] → search right half
L=4 R=6 mid=5: nums[5]=1
  left half [0,1] is sorted (0<=1)
  target=0 IN [0,1] → search left half
L=4 R=4 → nums[4]=0 == target → return 4`
  },

  '3Sum': {
    pattern: 'Sort + Two Pointers — Fix One, Slide Two',
    logic: [
      'Sort the array first to enable two-pointer technique',
      'For each index i, use L=i+1 and R=end to find pairs summing to -nums[i]',
      'Sum > 0 → move R left; sum < 0 → move L right; sum=0 → record, skip duplicates',
      'Skip duplicate values of i and after recording a triplet'
    ],
    visual:
`nums = [-4,-1,-1,0,1,2]  (sorted)

i=0 (-4):  L=1 R=5  sum=-4+-1+2=-3 < 0 → L++
           L=2 R=5  sum=-4+-1+2=-3 < 0 → L++
           L=3 R=5  sum=-4+0+2=-2  < 0 → L++
           L=4 R=5  sum=-4+1+2=-1  < 0 → L++  done
i=1 (-1):  L=2 R=5  sum=-1+-1+2=0 → [-1,-1,2] ✓
           skip dup: L=3 R=4  sum=-1+0+1=0 → [-1,0,1] ✓`
  },

  'Container With Most Water': {
    pattern: 'Two Pointers — Move Shorter Wall Inward',
    logic: [
      'Area = min(height[L], height[R]) × (R - L)',
      'Moving the taller wall inward can only decrease width without gain',
      'Moving the shorter wall inward might find a taller wall → potentially more area',
      'Greedily always move the pointer with the shorter height'
    ],
    visual:
`height = [1,8,6,2,5,4,8,3,7]
           L                 R

area = min(1,7)×8 = 8 → L has shorter height, L++
L=1 (h=8), R=8 (h=7): area = min(8,7)×7 = 49 → R-- (shorter)
L=1 (h=8), R=7 (h=3): area = min(8,3)×6 = 18 → R--
...max = 49`
  },

  'Sum of Two Integers': {
    pattern: 'Bit Manipulation — XOR Sum + AND Carry',
    logic: [
      'XOR gives sum bits where at least one bit differs (no carry)',
      'AND gives carry bits (both bits are 1 → carry into next position)',
      'Shift carry left by 1, then add to XOR result',
      'Repeat until carry is 0 — no arithmetic operators used'
    ],
    visual:
`a=1 (001), b=3 (011)

Round 1: sum = 001 XOR 011 = 010
         carry = (001 AND 011) << 1 = 010
Round 2: sum = 010 XOR 010 = 000
         carry = (010 AND 010) << 1 = 100
Round 3: sum = 000 XOR 100 = 100
         carry = 0 → done!  result = 4`
  },

  'Number of 1 Bits': {
    pattern: 'Bit Trick — n & (n-1) Clears Lowest Set Bit',
    logic: [
      'n & (n-1) turns off the rightmost 1-bit of n',
      'Count how many times you can do this before n reaches 0',
      'Each operation removes exactly one 1-bit → count = number of 1s',
      'Alternative: check n&1 and right-shift, but n&(n-1) is faster'
    ],
    visual:
`n = 11  (binary: 1011)

step 1: n=1011, n-1=1010, n&(n-1)=1010  count=1
step 2: n=1010, n-1=1001, n&(n-1)=1000  count=2
step 3: n=1000, n-1=0111, n&(n-1)=0000  count=3
n=0 → return 3`
  },

  'Counting Bits': {
    pattern: 'DP — Reuse Subproblem via Bit Shift',
    logic: [
      'dp[i] = number of 1-bits in i',
      'i >> 1 drops the last bit → same count ± last bit',
      'dp[i] = dp[i >> 1] + (i & 1)',
      'Build the array from 0 to n in one pass'
    ],
    visual:
`n=5  → output=[0,1,1,2,1,2]

i=0: 0 bits         dp=[0]
i=1: dp[0]+(1&1)=1  dp=[0,1]
i=2: dp[1]+(2&1)=1  dp=[0,1,1]
i=3: dp[1]+(3&1)=2  dp=[0,1,1,2]
i=4: dp[2]+(4&1)=1  dp=[0,1,1,2,1]
i=5: dp[2]+(5&1)=2  dp=[0,1,1,2,1,2]`
  },

  'Missing Number': {
    pattern: 'Math — Expected Sum Minus Actual Sum',
    logic: [
      'Expected sum of [0..n] = n×(n+1)/2',
      'Actual sum = sum of array elements',
      'Missing = expected - actual',
      'Alternative: XOR all indices with all values → missing remains'
    ],
    visual:
`nums = [3,0,1]  n=3

expected = 3×4/2 = 6
actual   = 3+0+1 = 4
missing  = 6-4   = 2

XOR approach: (0^1^2^3) ^ (3^0^1) = 2`
  },

  'Reverse Bits': {
    pattern: 'Bit Shifting — Build Result Right to Left',
    logic: [
      'Extract the LSB of n with n & 1',
      'Shift result left by 1 to make room, OR in the extracted bit',
      'Shift n right by 1 to process the next bit',
      'Repeat 32 times for a 32-bit integer'
    ],
    visual:
`n = 0000...0010110111101111000100100  (43261596)

for 32 iterations:
  bit = n & 1           → extract rightmost bit
  result = (result<<1) | bit  → add to result
  n >>= 1               → shift n right

Result flips the entire 32-bit representation`
  },

  'Climbing Stairs': {
    pattern: 'DP — Fibonacci Recurrence',
    logic: [
      'To reach step n, you came from step n-1 or step n-2',
      'ways(n) = ways(n-1) + ways(n-2)',
      'Base cases: ways(1)=1, ways(2)=2',
      'Space-optimized: only store previous two values'
    ],
    visual:
`n=5  → 8 ways

n:  1  2  3  4  5
dp: 1  2  3  5  8

dp[3]=dp[2]+dp[1]=2+1=3
dp[4]=dp[3]+dp[2]=3+2=5
dp[5]=dp[4]+dp[3]=5+3=8`
  },

  'Longest Increasing Subsequence': {
    pattern: 'DP or Binary Search — Patience Sort',
    logic: [
      'DP: dp[i]=length of LIS ending at index i; O(n²)',
      'Binary Search (Patience): maintain a tails array',
      'tails[i] = smallest tail of all increasing subseqs of length i+1',
      'Binary search for insertion point of each num → O(n log n)'
    ],
    visual:
`nums = [10,9,2,5,3,7,101,18]

tails after each num:
10  → [10]
 9  → [9]       (replace 10)
 2  → [2]       (replace 9)
 5  → [2,5]     (extend)
 3  → [2,3]     (replace 5)
 7  → [2,3,7]   (extend)
101 → [2,3,7,101]
 18 → [2,3,7,18] (replace 101)

LIS length = len(tails) = 4`
  },

  'Longest Common Subsequence': {
    pattern: '2D DP — Match or Skip',
    logic: [
      'dp[i][j] = LCS length of text1[0..i] and text2[0..j]',
      'If chars match: dp[i][j] = dp[i-1][j-1] + 1',
      'Else: dp[i][j] = max(dp[i-1][j], dp[i][j-1])',
      'Answer is dp[m][n]'
    ],
    visual:
`text1="abcde"  text2="ace"

    ""  a  c  e
""   0  0  0  0
a    0  1  1  1
b    0  1  1  1
c    0  1  2  2
d    0  1  2  2
e    0  1  2  3  ← answer=3`
  },

  'Combination Sum IV': {
    pattern: 'DP — Ordered Combinations (Order Matters)',
    logic: [
      'dp[i] = number of ways to make amount i',
      'For each amount, try every number in the array',
      'dp[i] += dp[i - num] for each num <= i',
      'Order matters (unlike coin change combinations) → iterate amounts outer, nums inner'
    ],
    visual:
`nums=[1,2,3]  target=4

dp[0]=1 (empty combination)
dp[1]: +dp[0]=1             → 1
dp[2]: +dp[1]+dp[0]=1+1     → 2  ... +dp[2-2]
dp[3]: +dp[2]+dp[1]+dp[0]   → 4
dp[4]: +dp[3]+dp[2]+dp[1]   → 7  ← answer`
  },

  'House Robber': {
    pattern: 'DP — Skip Adjacent Constraint',
    logic: [
      'Cannot rob two adjacent houses',
      'At each house: take max of (rob current + best 2 back) vs (skip = best 1 back)',
      'dp[i] = max(dp[i-2] + nums[i], dp[i-1])',
      'Space-optimized: track only prev2 and prev1'
    ],
    visual:
`nums = [2, 7, 9, 3, 1]

i=0: rob=2              prev2=0, prev1=2
i=1: rob=max(7,2)=7     prev2=2, prev1=7
i=2: rob=max(0+9,7)=11  prev2=7, prev1=11  ← rob 2+9
i=3: rob=max(7+3,11)=11 prev2=11, prev1=11
i=4: rob=max(11+1,11)=12 → answer=12`
  },

  'House Robber II': {
    pattern: 'DP Twice — Circular = Two Linear Subproblems',
    logic: [
      'Houses form a circle → can\'t rob both first and last',
      'Split into two linear subproblems: [0..n-2] and [1..n-1]',
      'Apply House Robber I on each; take the maximum result',
      'The circular constraint is handled by excluding one endpoint each time'
    ],
    visual:
`nums = [2,3,2]  (house 0 and 2 are adjacent)

Subproblem 1: [2,3]   → rob=3
Subproblem 2: [3,2]   → rob=3

max(3,3) = 3  ← answer

General: max(rob(nums[:-1]), rob(nums[1:]))`
  },

  'Decode Ways': {
    pattern: 'DP — One or Two Digit Choices',
    logic: [
      'dp[i] = number of ways to decode s[0..i-1]',
      'dp[0]=1 (empty string), dp[1]=1 if s[0]!="0" else 0',
      'One-digit decode: if s[i-1]!="0" → dp[i] += dp[i-1]',
      'Two-digit decode: if s[i-2..i-1] in [10..26] → dp[i] += dp[i-2]'
    ],
    visual:
`s = "226"

dp[0]=1  dp[1]=1
i=2: s[1]='2' ≠ '0'  → dp[2]+=dp[1]=1
     s[0:2]="22" in [10,26] → dp[2]+=dp[0]=1+1=2
i=3: s[2]='6' ≠ '0'  → dp[3]+=dp[2]=2
     s[1:3]="26" in [10,26] → dp[3]+=dp[1]=2+1=3  ← answer`
  },

  'Unique Paths': {
    pattern: '2D DP — Sum of Paths From Left and Above',
    logic: [
      'dp[r][c] = number of unique paths to reach cell (r,c)',
      'Can only move right or down → dp[r][c] = dp[r-1][c] + dp[r][c-1]',
      'First row and column = 1 (only one way to reach any edge cell)',
      'Space-optimized: use a single 1D array updated in place'
    ],
    visual:
`3×7 grid:

1  1  1  1  1  1  1
1  2  3  4  5  6  7
1  3  6  10 15 21 28

Each cell = left + above → answer = dp[2][6] = 28`
  },

  'Jump Game': {
    pattern: 'Greedy — Track Maximum Reachable Index',
    logic: [
      'Track the farthest index reachable from any index seen so far',
      'If current index i > maxReach → stuck, return False',
      'Update maxReach = max(maxReach, i + nums[i]) at each step',
      'If maxReach >= last index at any point → return True'
    ],
    visual:
`nums = [2,3,1,1,4]

i=0: maxR = max(0, 0+2)=2
i=1: maxR = max(2, 1+3)=4 ← can reach end!
i=2: maxR = max(4, 2+1)=4
...  maxR=4 >= 4 → True

nums = [3,2,1,0,4]
i=3: maxR=max(3,3+0)=3, i=4 > maxR=3 → False`
  },

  'Clone Graph': {
    pattern: 'DFS + Hash Map — Node → Clone Mapping',
    logic: [
      'Hash map maps original node → its clone (prevents cycles)',
      'DFS: if node already in map → return its clone (cycle short-circuit)',
      'Otherwise: create clone, add to map, then clone all neighbors recursively',
      'Cloning neighbors fills the adjacency list of each clone'
    ],
    visual:
`Graph: 1—2
        |  |
        4—3

DFS(1): clone1=Node(1), map={1:clone1}
  DFS(2): clone2=Node(2), map={...,2:clone2}
    DFS(3): clone3=Node(3)...
    DFS(1): already in map → return clone1 (stop recursion)
  DFS(4): clone4=Node(4)...`
  },

  'Course Schedule': {
    pattern: 'Topological Sort — Cycle Detection (DFS States)',
    logic: [
      'Build adjacency list from prerequisites pairs',
      'DFS with three states: 0=unvisited, 1=in-progress, 2=done',
      'If you visit a node in state 1 → cycle → return False',
      'If DFS completes all nodes without cycle → return True'
    ],
    visual:
`courses=4  prereqs=[[1,0],[2,0],[3,1],[3,2]]

Graph: 0→1→3
        ↘2↗

DFS(0): state=in-progress
  DFS(1): state=in-progress
    DFS(3): state=in-progress → done
  DFS(1): done
  DFS(2): done → DFS(3): already done, skip
DFS(0): done  → no cycle, return True`
  },

  'Pacific Atlantic Water Flow': {
    pattern: 'Multi-Source BFS/DFS — Flow Backward From Oceans',
    logic: [
      'Instead of flowing from each cell to ocean, flow backward from ocean borders',
      'BFS from all Pacific border cells → mark reachable set P',
      'BFS from all Atlantic border cells → mark reachable set A',
      'Answer = cells in both P and A (water can reach both oceans)'
    ],
    visual:
`Grid (heights):
P P P P A
P 1 2 2 A
P 3 2 3 A
P 4 4 4 A
A A A A A

BFS from P-border (top+left) → pacific set
BFS from A-border (bottom+right) → atlantic set
Intersection = cells that can flow to both`
  },

  'Longest Consecutive Sequence': {
    pattern: 'Hash Set — Only Start Counting at Sequence Beginnings',
    logic: [
      'Add all numbers to a hash set for O(1) lookup',
      'Only start counting when num-1 is NOT in set (sequence start)',
      'Extend the sequence upward: while num+1 in set → count++',
      'Avoid redundant counting of non-starting elements'
    ],
    visual:
`nums = [100,4,200,1,3,2]
set  = {100,4,200,1,3,2}

100: 99 not in set → start. 101? no → len=1
  4: 3 in set → not a start, skip
200: 199 not in set → start. 201? no → len=1
  1: 0 not in set → start. 2→3→4 in set → len=4 ← max`
  },

  'Alien Dictionary': {
    pattern: 'Topological Sort — Extract Order from Word Pairs',
    logic: [
      'Compare adjacent words pairwise to find character ordering constraints',
      'First differing character pair (w1[i], w2[i]) gives edge w1[i]→w2[i]',
      'Build adjacency list + in-degree map, then BFS (Kahn\'s algorithm)',
      'If cycle detected or not all chars processed → invalid → return ""'
    ],
    visual:
`words = ["wrt","wrf","er","ett","rftt"]

Compare wrt vs wrf → t→f
Compare wrf vs er  → w→e
Compare er  vs ett → r→t
Compare ett vs rftt→ e→r

Graph: w→e→r→t→f
Topological order: "wertf"`
  },

  'Graph Valid Tree': {
    pattern: 'Union-Find — n-1 Edges + No Cycle',
    logic: [
      'A valid tree has exactly n-1 edges and no cycles',
      'Use Union-Find; for each edge try to union the two nodes',
      'If they already share a root → cycle → not a tree',
      'After all edges, tree is valid if no cycle was found'
    ],
    visual:
`n=5  edges=[[0,1],[0,2],[0,3],[1,4]]

union(0,1): roots differ → merge
union(0,2): roots differ → merge
union(0,3): roots differ → merge
union(1,4): roots differ → merge
4 edges, n-1=4 edges, no cycle → valid tree ✓

If extra edge union(2,3): same root → cycle → False`
  },

  'Number of Connected Components': {
    pattern: 'Union-Find or DFS — Count Disjoint Sets',
    logic: [
      'Start with n components (each node is its own component)',
      'For each edge: if roots differ → union them and decrement count',
      'After all edges, component count = number of disjoint groups',
      'DFS alternative: count DFS calls needed to visit all unvisited nodes'
    ],
    visual:
`n=5  edges=[[0,1],[1,2],[3,4]]

components=5
union(0,1): merge → components=4
union(1,2): merge → components=3
union(3,4): merge → components=2

Result: 2 components  {0,1,2} and {3,4}`
  },

  'Insert Interval': {
    pattern: 'Linear Scan — Three Phases',
    logic: [
      'Phase 1: add all intervals that end before new interval starts',
      'Phase 2: merge all intervals that overlap with new interval (update bounds)',
      'Phase 3: add all remaining intervals',
      'No sorting needed since input is already sorted'
    ],
    visual:
`intervals=[[1,3],[6,9]]  newInterval=[2,5]

Phase 1: [1,3] ends at 3, new starts at 2 → 3>=2 overlap, skip
Phase 2: merge [1,3] and [2,5] → [1,5]
         [6,9] starts at 6, merged ends at 5 → no overlap, stop
Phase 3: append [6,9]

Result: [[1,5],[6,9]]`
  },

  'Non-overlapping Intervals': {
    pattern: 'Greedy — Sort by End, Greedily Keep Intervals',
    logic: [
      'Sort by end time (greedy: intervals ending earlier leave more room)',
      'Track the end time of the last kept interval',
      'If current start < last end → overlap → remove current (count++)',
      'Else no overlap → keep current, update last end'
    ],
    visual:
`intervals = [[1,2],[2,3],[3,4],[1,3]]
sorted by end: [[1,2],[2,3],[1,3],[3,4]]

keep  [1,2]: lastEnd=2
keep  [2,3]: 2>=2, no overlap, lastEnd=3
remove[1,3]: 1<3 overlap! removals=1
keep  [3,4]: 3>=3, no overlap

Minimum removals = 1`
  },

  'Meeting Rooms': {
    pattern: 'Sort + Linear Scan — Check Consecutive Overlap',
    logic: [
      'Sort meetings by start time',
      'Check each consecutive pair: if next.start < current.end → overlap',
      'One overlap means the person can\'t attend all meetings',
      'Return False on first overlap found, True if none found'
    ],
    visual:
`intervals = [[0,30],[5,10],[15,20]]
sorted:      [[0,30],[5,10],[15,20]]

[0,30] vs [5,10]: 5 < 30 → OVERLAP → return False

intervals = [[7,10],[2,4]]
sorted:      [[2,4],[7,10]]
[2,4] vs [7,10]: 7 >= 4 → no overlap → return True`
  },

  'Meeting Rooms II': {
    pattern: 'Min Heap — Track Earliest Ending Meeting',
    logic: [
      'Sort meetings by start time',
      'Use a min-heap to track end times of active meetings',
      'If earliest-ending meeting finishes before next starts → reuse that room',
      'Otherwise allocate a new room (push to heap); answer = heap size'
    ],
    visual:
`intervals = [[0,30],[5,10],[15,20]]
sorted start: [[0,30],[5,10],[15,20]]

[0,30]: heap=[] → push 30      heap=[30]  rooms=1
[5,10]: 5<30 overlap → push 10 heap=[10,30] rooms=2
[15,20]: 15>10 → pop 10, push 20 heap=[20,30] rooms=2

Answer: 2 rooms`
  },

  'Linked List Cycle': {
    pattern: 'Floyd\'s Slow/Fast Pointers — Tortoise and Hare',
    logic: [
      'Slow moves 1 step, fast moves 2 steps per iteration',
      'If there\'s a cycle, fast will eventually lap slow and they\'ll meet',
      'If fast reaches None (or None.next) → no cycle',
      'Meeting point is inside the cycle, not necessarily the entry'
    ],
    visual:
`List: 1 → 2 → 3 → 4 → 5
                   ↑         ↓
                   └ ← ← ← ←┘  (cycle at 3)

slow: 1→2→3→4→5→3→4→5...
fast: 1→3→5→4→3→5→4 ...
They meet somewhere inside the loop → cycle detected`
  },

  'Merge Two Sorted Lists': {
    pattern: 'Two Pointer Merge — Dummy Head Trick',
    logic: [
      'Use a dummy head node to avoid edge cases',
      'Compare current nodes of both lists; link the smaller one',
      'Advance the pointer of whichever list was chosen',
      'After one list is exhausted, link the remainder of the other'
    ],
    visual:
`l1: 1→2→4
l2: 1→3→4

dummy→?

l1=1, l2=1 → link l1.  dummy→1(l1)→?  l1=2
l1=2, l2=1 → link l2.  dummy→1→1(l2)→? l2=3
l1=2, l2=3 → link l1.  ...→2→? l1=4
l1=4, l2=3 → link l2.  ...→3→? l2=4
l1=4, l2=4 → link l1.  ...→4→? l1=None
l1=None → link l2 tail  ...→4

Result: 1→1→2→3→4→4`
  },

  'Remove Nth Node From End': {
    pattern: 'Two Pointers — N-Gap Between Fast and Slow',
    logic: [
      'Advance fast pointer n+1 steps ahead of slow',
      'Move both pointers together until fast reaches None',
      'Slow is now at the node just before the target',
      'Skip the target: slow.next = slow.next.next'
    ],
    visual:
`list: 1→2→3→4→5   remove 2nd from end (node=4)

Start: dummy→1→2→3→4→5
fast advances n+1=3 steps from dummy:
  fast=3, slow=dummy

Move together until fast=None:
  fast=4, slow=1
  fast=5, slow=2
  fast=None, slow=3  ← slow.next is node to remove

slow.next = slow.next.next → removes 4
Result: 1→2→3→5`
  },

  'Reorder List': {
    pattern: 'Find Middle + Reverse Second Half + Merge',
    logic: [
      'Step 1: find middle using slow/fast pointers',
      'Step 2: reverse the second half of the list in-place',
      'Step 3: merge the two halves by interleaving nodes',
      'No extra space needed; all three steps are O(n) time'
    ],
    visual:
`list: 1→2→3→4→5

Step 1: mid=3  split: [1→2→3] and [4→5]
Step 2: reverse second: [5→4]
Step 3: merge interleaved:
  take 1 from L1, take 5 from L2
  take 2 from L1, take 4 from L2
  take 3 from L1
Result: 1→5→2→4→3`
  },

  'Set Matrix Zeroes': {
    pattern: 'Flag Rows/Cols — Use First Row/Col as Markers',
    logic: [
      'Pass 1: record which rows and cols contain zeros',
      'Use the first row and first col as flag arrays (O(1) space)',
      'Handle the [0][0] overlap with a separate flag variable',
      'Pass 2: use the flags to zero out the appropriate cells'
    ],
    visual:
`matrix:           after:
1 1 1             1 0 1
1 0 1    →        0 0 0
1 1 1             1 0 1

Zero at [1][1] → flag row 1 and col 1
Set all of row 1 to 0, all of col 1 to 0`
  },

  'Spiral Matrix': {
    pattern: 'Boundary Simulation — Shrink Borders After Each Direction',
    logic: [
      'Maintain top, bottom, left, right boundary pointers',
      'Traverse: left→right across top, top→bottom down right side',
      'Then right→left across bottom, bottom→top up left side',
      'After each direction shrink the corresponding boundary'
    ],
    visual:
`matrix = [[1,2,3],[4,5,6],[7,8,9]]

→ traverse top (1,2,3), top++
↓ traverse right (6,9), right--
← traverse bottom (8,7), bottom--
↑ traverse left (4), left++
→ traverse new top (5)

Result: [1,2,3,6,9,8,7,4,5]`
  },

  'Rotate Image': {
    pattern: 'Transpose + Reflect — Two In-Place Passes',
    logic: [
      'Step 1: transpose matrix (swap matrix[i][j] with matrix[j][i])',
      'Step 2: reverse each row (horizontal flip)',
      'Combining transpose + horizontal flip = 90° clockwise rotation',
      'Both passes are O(n²) in-place with O(1) extra space'
    ],
    visual:
`original:    transpose:   reverse rows (rotate 90°):
1 2 3        1 4 7        7 4 1
4 5 6   →    2 5 8   →    8 5 2
7 8 9        3 6 9        9 6 3`
  },

  'Word Search': {
    pattern: 'Backtracking DFS — Mark Visited, Unmark on Backtrack',
    logic: [
      'For each cell matching word[0], start a DFS',
      'Mark cell as visited (e.g., replace with "#") to avoid reuse',
      'Recurse in 4 directions for word[1:]; if all chars matched → True',
      'Backtrack: restore original character before returning'
    ],
    visual:
`board:   A B C E       word: "ABCCED"
         S F C S
         A D E E

Start DFS at (0,0)='A':
  → (0,1)='B' → (0,2)='C' → (1,2)='C' → (2,2)='E' → (2,1)='D' ✓
Mark each visited, restore on backtrack`
  },

  'Longest Repeating Character Replacement': {
    pattern: 'Sliding Window — Window Size - MaxFreq <= k',
    logic: [
      'Expand window right; track frequency of each char in window',
      'Window is valid when (window size - max frequency) <= k',
      '(window size - max freq) = chars that need replacing',
      'Shrink left when invalid; track the answer as max valid window size'
    ],
    visual:
`s="AABABBA"  k=1

L=0 R=3: [AABA] maxF=3(A) size=4 size-maxF=1<=1 valid  ans=4
L=0 R=4: [AABAB] maxF=3 size=5 size-maxF=2>1  invalid  L++
L=1 R=4: [ABAB] maxF=2 size=4 size-maxF=2>1  invalid  L++
L=2 R=4: [BAB] maxF=2 size=3 1<=1 valid  ans=4
L=2 R=5: [BABB] maxF=3(B) size=4 1<=1 valid  ans=4`
  },

  'Minimum Window Substring': {
    pattern: 'Sliding Window — Two Hash Maps, Shrink When Satisfied',
    logic: [
      'Track character frequencies needed (t_count) and in-window (w_count)',
      'Expand right until window satisfies all requirements (formed==required)',
      'Once valid: record minimum, shrink from left to find smaller valid windows',
      'Continue until right pointer reaches end of string'
    ],
    visual:
`s="ADOBECODEBANC"  t="ABC"
required=3 (need A,B,C)

expand: ADOBEC  formed=3 ← valid! ans="ADOBEC"
shrink: DOBEC   formed=2 ← invalid, expand
expand: DOBECODEBA  formed=3 ← valid! ans="BANC"...
...final ans="BANC"`
  },

  'Valid Anagram': {
    pattern: 'Frequency Count — Compare Character Maps',
    logic: [
      'Count frequency of each character in string s',
      'Decrement count for each character in string t',
      'If any count ≠ 0 after processing → not an anagram',
      'Shortcut: if lengths differ → immediately False'
    ],
    visual:
`s="anagram"  t="nagaram"

count after s: {a:3, n:1, g:1, r:1, m:1}
subtract t:    {a:0, n:0, g:0, r:0, m:0}

All zeros → True (valid anagram)

s="rat"  t="car":
count after: {r:1,a:1,t:1,-c:-1,-a:0,-r:0} → not all 0 → False`
  },

  'Group Anagrams': {
    pattern: 'Hash Map — Sorted String as Group Key',
    logic: [
      'Sort each string alphabetically → anagrams produce the same key',
      'Use sorted string as hash map key; append original to its group',
      'Return the values of the map as the grouped lists',
      'Alternative key: tuple of 26 character frequencies'
    ],
    visual:
`strs = ["eat","tea","tan","ate","nat","bat"]

"eat" → sorted="aet" → group["aet"]=["eat"]
"tea" → sorted="aet" → group["aet"]=["eat","tea"]
"tan" → sorted="ant" → group["ant"]=["tan"]
"ate" → sorted="aet" → group["aet"]=[...,"ate"]
"nat" → sorted="ant" → group["ant"]=[...,"nat"]
"bat" → sorted="abt" → group["abt"]=["bat"]`
  },

  'Valid Palindrome': {
    pattern: 'Two Pointers — Skip Non-Alphanumeric',
    logic: [
      'Left pointer from start, right pointer from end',
      'Skip non-alphanumeric characters on both sides',
      'Compare lowercased characters; if mismatch → False',
      'If pointers cross without mismatch → True'
    ],
    visual:
`s = "A man, a plan, a canal: Panama"

filtered: "amanaplanacanalpanama"

L                                R
a  m  a  n  a  p  l  a  n  a  c  a  n  a  l  p  a  n  a  m  a
L=a vs R=a ✓  L=m vs R=m ✓  ... all match → True`
  },

  'Palindromic Substrings': {
    pattern: 'Expand Around Center — Odd and Even Lengths',
    logic: [
      'Every palindrome has a center (1 char for odd, gap for even)',
      'For each center, expand outward while chars match',
      'Count each valid expansion as a palindrome',
      'n centers for odd + n-1 centers for even = 2n-1 total centers'
    ],
    visual:
`s = "abc"

centers: a, (a,b), b, (b,c), c
expand from 'b': b itself → count=1
expand from 'b','c': b≠c stop
...

s = "aaa"
center 'a'[1]: expand to "aaa" → count 3 palindromes
All: a, aa, a, aaa, a, aa, a → total 6`
  },

  'Longest Palindromic Substring': {
    pattern: 'Expand Around Center — Track Start/End of Best',
    logic: [
      'Same expand-around-center as counting palindromes',
      'Track (start, end) of the longest palindrome found so far',
      'Check both odd centers (single char) and even centers (two same chars)',
      'Return s[start:end+1] at the end'
    ],
    visual:
`s = "babad"

center 'b'[0]: "b" len=1
center 'a'[1]: "bab" len=3 ← new best [0,2]
center 'b'[2]: "aba" len=3 (same length)
center 'a'[3]: "a" len=1
center 'd'[4]: "d" len=1

Answer: "bab" or "aba"`
  },

  'Encode and Decode Strings': {
    pattern: 'Length-Prefix Protocol — {len}#{string}',
    logic: [
      'Encode: for each string, prepend its length and a "#" delimiter',
      'Decode: read digits until "#", parse length, read that many chars',
      'Length prefix handles strings containing any character including "#"',
      'No escaping needed since we always know exactly how many chars to read'
    ],
    visual:
`encode(["hello","world"]):
  "5#hello" + "5#world" = "5#hello5#world"

decode("5#hello5#world"):
  i=0: read until '#' → len=5, read 5 chars → "hello", i=8
  i=8: read until '#' → len=5, read 5 chars → "world"
  result: ["hello","world"]`
  },

  'Maximum Depth of Binary Tree': {
    pattern: 'DFS — Depth = 1 + Max(Left, Right)',
    logic: [
      'Base case: None node has depth 0',
      'Recursive case: depth = 1 + max(depth(left), depth(right))',
      'The recursion naturally explores all paths; max picks the deepest',
      'BFS alternative: count levels as queue empties'
    ],
    visual:
`Tree:      3
          / \
         9  20
            / \
           15   7

depth(9)=1, depth(15)=1, depth(7)=1
depth(20)=1+max(1,1)=2
depth(3)=1+max(1,2)=3`
  },

  'Same Tree': {
    pattern: 'DFS — Simultaneously Traverse Both Trees',
    logic: [
      'Base: both None → True; one None → False',
      'Current values differ → False',
      'Recursively check: same(left1,left2) AND same(right1,right2)',
      'All recursive calls must return True for trees to be identical'
    ],
    visual:
`Tree1:   1       Tree2:   1
        / \               / \
       2   3             2   3

same(1,1): vals match
  same(2,2): vals match
    same(None,None)=T  same(None,None)=T → True
  same(3,3): vals match → True
Result: True`
  },

  'Invert Binary Tree': {
    pattern: 'DFS — Swap Children at Every Node',
    logic: [
      'Base case: None node → return None',
      'Swap left and right children at the current node',
      'Recursively invert the left subtree and right subtree',
      'The swap happens at every level; recursion handles depth'
    ],
    visual:
`Original:   4          Inverted:   4
           / \                     / \
          2   7       →            7   2
         / \ / \                  / \ / \
        1  3 6  9                9  6 3  1`
  },

  'Binary Tree Maximum Path Sum': {
    pattern: 'DFS — Track Global Max, Return Single-Side Gain',
    logic: [
      'Each node can be the "peak" of a path (left + node + right)',
      'DFS returns max single-sided gain (max(left,right) + node.val) to parent',
      'At each node update global max with left_gain + node.val + right_gain',
      'Negative gains are ignored (clamped to 0)'
    ],
    visual:
`Tree:  -10
        / \
       9  20
          / \
         15   7

At 15: gain=15, max_path=15
At 7:  gain=7,  max_path=15
At 20: left=15, right=7  path_through=15+20+7=42 ← global max!
       return 20+15=35 to parent
At 9:  gain=9
At -10: path_through=-10+9+35=34  max stays 42`
  },

  'Binary Tree Level Order Traversal': {
    pattern: 'BFS — Queue With Level Grouping',
    logic: [
      'Use a queue; start with root',
      'Process all nodes at current level (queue size at start of iteration)',
      'For each node: record its value, enqueue its non-null children',
      'Append the level\'s values as a list to the result'
    ],
    visual:
`Tree:      3
          / \
         9  20
            / \
           15   7

queue=[3]         level=[], pop 3 → enqueue 9,20
queue=[9,20]      level=[3], pop 9(no children), pop 20 → enqueue 15,7
queue=[15,7]      level=[9,20], pop 15,7 → no children
result=[[3],[9,20],[15,7]]`
  },

  'Serialize and Deserialize Binary Tree': {
    pattern: 'BFS Encode/Decode — Level-Order with Null Markers',
    logic: [
      'Serialize: BFS, output node values separated by commas; "null" for None',
      'Deserialize: split by comma, use a queue of parent nodes',
      'For each parent dequeue, the next two values in the stream are its children',
      'Skip "null" values (no children to enqueue for them)'
    ],
    visual:
`Tree:   1
       / \
      2   3
         / \
        4   5

Serialize: "1,2,3,null,null,4,5"

Deserialize:
  stream=[1,2,3,null,null,4,5]
  root=1, queue=[1]
  pop 1: left=2, right=3, queue=[2,3]
  pop 2: left=null, right=null
  pop 3: left=4, right=5`
  },

  'Subtree of Another Tree': {
    pattern: 'DFS — isSameTree Check at Every Node',
    logic: [
      'At each node of root, check if the subtree rooted there equals subRoot',
      'Use the Same Tree comparison recursively',
      'If root is None and subRoot is not → False',
      'Return True if same at current OR same in left subtree OR same in right subtree'
    ],
    visual:
`root:         3          subRoot: 4
             / \                 / \
            4   5               1   2
           / \
          1   2

Check same(4,4): 4=4, same(1,1)=T, same(2,2)=T → True!
isSubtree returns True at node 4`
  },

  'Construct Tree from Preorder + Inorder': {
    pattern: 'Divide & Conquer — Root from Preorder, Split Inorder',
    logic: [
      'First element of preorder is always the root',
      'Find root\'s index in inorder → left subtree has that many nodes',
      'Left preorder slice and left inorder slice → recurse for left child',
      'Right slices → recurse for right child'
    ],
    visual:
`preorder=[3,9,20,15,7]  inorder=[9,3,15,20,7]

root=3 (preorder[0])
root in inorder at idx=1 → left has 1 node, right has 3
left:  pre=[9],      in=[9]       → Node(9)
right: pre=[20,15,7], in=[15,20,7] → recurse
  root=20, left=15, right=7`
  },

  'Validate Binary Search Tree': {
    pattern: 'DFS with Bounds — Pass Min/Max Constraints Down',
    logic: [
      'Each node must satisfy: min < node.val < max',
      'Left child: max boundary tightens to node.val',
      'Right child: min boundary tightens to node.val',
      'Start with (-∞, +∞); any violation returns False immediately'
    ],
    visual:
`Tree:      5
          / \
         1   4
            / \
           3   6

validate(5, -inf, +inf): 5 in range ✓
  validate(1, -inf, 5):  1 in range ✓
  validate(4, 5, +inf):  4 < 5 → INVALID! return False`
  },

  'Kth Smallest Element in BST': {
    pattern: 'In-Order Traversal — Left, Root, Right = Sorted',
    logic: [
      'In-order traversal of a BST visits nodes in ascending order',
      'Count nodes visited; when count == k → that\'s the answer',
      'Can use recursive DFS with a counter or iterative stack approach',
      'No need to collect all values; stop as soon as kth is reached'
    ],
    visual:
`BST:      3
         / \
        1   4
         \
          2

In-order: 1 → 2 → 3 → 4

k=2 → 2nd visited = 2`
  },

  'Lowest Common Ancestor of BST': {
    pattern: 'BST Property — Navigate Without Full Traversal',
    logic: [
      'If both p and q are less than root → LCA is in left subtree',
      'If both p and q are greater than root → LCA is in right subtree',
      'Otherwise root is the split point → root IS the LCA',
      'No need to visit the whole tree; BST order guides the search'
    ],
    visual:
`BST:         6
            / \
           2   8
          / \ / \
         0  4 7  9
           / \
          3   5

LCA(2,8): 2<6 and 8>6 → 6 is LCA (split point)
LCA(2,4): 2<6 and 4<6 → go left → 2<2? no, 4>2 → 2 is LCA`
  },

  'Top K Frequent Elements': {
    pattern: 'Bucket Sort — Frequency as Index',
    logic: [
      'Count frequencies with a hash map',
      'Create buckets array indexed by frequency (1 to n)',
      'Place each element into its frequency bucket',
      'Scan buckets from high to low frequency, collect k elements'
    ],
    visual:
`nums=[1,1,1,2,2,3]  k=2

freq: {1:3, 2:2, 3:1}
buckets: [[], [], [3], [2], [1], [], []]
          0    1   2    3    4   5   6
          ↑ idx=frequency count

scan from high: bucket[3]=[1], bucket[2]=[2] → [1,2]`
  },

  'Find Median from Data Stream': {
    pattern: 'Two Heaps — Max Heap Lower Half + Min Heap Upper Half',
    logic: [
      'Lower half in a max-heap, upper half in a min-heap',
      'Invariant: len(lower) == len(upper) or len(lower)==len(upper)+1',
      'Median: top of lower (odd total) or avg of both tops (even total)',
      'On insert: push to correct heap then rebalance sizes'
    ],
    visual:
`Stream: 1, 2, 3

add 1: lower=[1]  upper=[]    median=1
add 2: lower=[1]  upper=[2]   median=(1+2)/2=1.5
add 3: lower=[2]  upper=[3]   median=2
  (3 pushed to lower as 3>1.5, but lower too big, pop to upper)

lower (max-heap) | upper (min-heap)
      [2]        |      [3]
      [1]        |`
  },

  'Implement Trie': {
    pattern: 'Tree of Hash Maps — Character-by-Character',
    logic: [
      'Each node stores: children dict (char→node) and is_end flag',
      'Insert: for each char, create child node if missing, advance; mark end',
      'Search: advance through chars; return is_end at final node',
      'StartsWith: same as search but return True without checking is_end'
    ],
    visual:
`Insert "apple", "app":

root
 └─a
    └─p
       └─p (is_end=True for "app")
          └─l
             └─e (is_end=True for "apple")

search("app")=True, search("ap")=False, startsWith("ap")=True`
  },

  'Add and Search Word': {
    pattern: 'Trie + DFS for Wildcard \'.\' — Try All Children',
    logic: [
      'Build a trie for all inserted words',
      'Search: for each char, advance node; for \'.\' try all children recursively',
      'DFS explores all branches on \'.\' wildcard',
      'Return True if any branch reaches a valid end node'
    ],
    visual:
`Words: ["bad","dad","mad"]
search(".ad"):
  root → try all children: b,d,m
    b→a→d (is_end=True) → True!

search("b.."):
  root → b → all children of b → a → all children of a → d (is_end=True) → True`
  },

  'Word Search II': {
    pattern: 'Trie + Backtracking — Prune with Prefix Check',
    logic: [
      'Build a trie from all words to enable prefix pruning',
      'DFS from every cell; advance trie node along the path',
      'If no trie children match current char → prune that branch',
      'On reaching a trie is_end node → add word to results; continue DFS'
    ],
    visual:
`board: o a a n      words: ["oath","pea","eat","rain"]
       e t a e
       i h k r
       i f l v

DFS from (0,0)='o': trie has 'o'? yes → continue to (1,0)='e'...
...path o→e→a→t matches "oath" → add to result
Trie pruning prevents exploring paths with no matching word prefixes`
  }
};

// Company interview frequency data (appearances across public LC discussion posts)
const PROB_FREQ = {
  'Two Sum':                        [['Amazon',15],['Meta',10],['Google',8],['Microsoft',6]],
  'Valid Parentheses':              [['Amazon',8],['Microsoft',7],['Google',6],['Meta',5]],
  'Reverse Linked List':            [['Meta',12],['Amazon',6],['Google',5],['Microsoft',4]],
  'Best Time to Buy/Sell Stock':    [['Amazon',10],['Google',7],['Meta',5]],
  'Longest Substring No Repeat':    [['Amazon',9],['Meta',8],['Microsoft',6],['Google',5]],
  'LRU Cache':                      [['Amazon',12],['Google',9],['Microsoft',7],['Meta',6]],
  'Number of Islands':              [['Amazon',10],['Google',8],['Meta',7],['Microsoft',5]],
  'Merge K Sorted Lists':           [['Google',8],['Amazon',7],['Meta',6]],
  'Word Break':                     [['Amazon',8],['Google',6],['Meta',5]],
  'Trapping Rain Water':            [['Amazon',9],['Google',7],['Meta',6],['Microsoft',5]],
  'Find Duplicate Number':          [['Google',5],['Amazon',4],['Meta',4]],
  'Binary Search':                  [['Amazon',5],['Microsoft',5],['Google',4]],
  'Merge Intervals':                [['Google',8],['Meta',7],['Amazon',6],['Microsoft',5]],
  'Coin Change':                    [['Amazon',7],['Google',6],['Meta',4]],
  'Kth Largest Element':            [['Amazon',9],['Meta',8],['Google',6],['Microsoft',5]],
  'Product of Array Except Self':   [['Amazon',8],['Meta',7],['Google',5],['Microsoft',5]],
  'Maximum Subarray':               [['Amazon',9],['Microsoft',6],['Google',5]],
  '3Sum':                           [['Amazon',7],['Meta',7],['Google',5],['Apple',4]],
  'Container With Most Water':      [['Amazon',6],['Google',5],['Meta',5]],
  'Climbing Stairs':                [['Amazon',6],['Google',5],['Microsoft',4]],
  'Longest Increasing Subsequence': [['Amazon',6],['Apple',4],['Microsoft',4]],
  'Longest Common Subsequence':     [['Amazon',5],['Google',4],['Microsoft',4]],
  'House Robber':                   [['Amazon',6],['Google',5],['Meta',4]],
  'Clone Graph':                    [['Meta',8],['Amazon',5],['Google',4]],
  'Course Schedule':                [['Amazon',8],['Google',7],['Meta',6],['Microsoft',5]],
  'Linked List Cycle':              [['Amazon',7],['Microsoft',5],['Google',4]],
  'Merge Two Sorted Lists':         [['Amazon',6],['Google',5],['Meta',5]],
  'Word Search':                    [['Amazon',5],['Meta',5],['Microsoft',4]],
  'Minimum Window Substring':       [['Amazon',8],['Meta',7],['Google',5]],
  'Valid Anagram':                  [['Meta',5],['Amazon',4],['Google',4]],
  'Group Anagrams':                 [['Amazon',7],['Meta',6],['Google',5]],
  'Valid Palindrome':               [['Meta',5],['Amazon',5],['Microsoft',4]],
  'Binary Tree Level Order Traversal': [['Amazon',7],['Google',5],['Meta',4]],
  'Binary Tree Maximum Path Sum':   [['Amazon',7],['Meta',5],['Google',4]],
  'Serialize and Deserialize Binary Tree': [['Amazon',8],['Google',6],['Meta',6]],
  'Validate Binary Search Tree':    [['Amazon',6],['Google',4],['Microsoft',4]],
  'Top K Frequent Elements':        [['Amazon',8],['Meta',6],['Google',5]],
  'Find Median from Data Stream':   [['Amazon',9],['Google',7],['Meta',6]],
  'Implement Trie':                 [['Google',8],['Amazon',6],['Microsoft',5]],
  'Word Search II':                 [['Google',6],['Amazon',5],['Meta',4]],
  'Pacific Atlantic Water Flow':    [['Google',5],['Amazon',4]],
  'Meeting Rooms II':               [['Google',6],['Amazon',5],['Meta',5]],
  'Longest Palindromic Substring':  [['Amazon',6],['Microsoft',5],['Google',4]],
  'Jump Game':                      [['Amazon',5],['Google',4],['Meta',4]],
  'Decode Ways':                    [['Amazon',5],['Meta',4],['Google',4]],
  'Number of Connected Components': [['LinkedIn',5],['Amazon',4],['Google',4]],
  'Lowest Common Ancestor of BST':  [['Amazon',5],['Google',4],['Microsoft',4]],
  'Reorder List':                   [['Amazon',4],['Meta',4],['Microsoft',3]],
  'Set Matrix Zeroes':              [['Amazon',4],['Google',4],['Meta',4]],
};

// Inject pattern + logic + freq + markdown button into each problem card on load
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.problem-card').forEach(card => {
    const name = card.querySelector('.prob-name')?.textContent.trim();
    const data = PROB_DATA[name];

    // Inject company frequency tags
    const freq = PROB_FREQ[name];
    if (freq && freq.length) {
      const freqRow = document.createElement('div');
      freqRow.className = 'prob-freq-row';
      freq.forEach(([co, n]) => {
        const tag = document.createElement('span');
        tag.className = 'freq-tag';
        tag.textContent = co + ' ×' + n;
        freqRow.appendChild(tag);
      });
      const probCat = card.querySelector('.prob-cat');
      if (probCat) probCat.after(freqRow);
    }

    // Inject "Copy as Markdown" button on the prob-head row
    const probHead = card.querySelector('.prob-head');
    if (probHead) {
      const mdBtn = document.createElement('button');
      mdBtn.className = 'prob-md-btn';
      mdBtn.title = 'Copy as Markdown (for Notion / Obsidian)';
      mdBtn.textContent = 'MD';
      mdBtn.addEventListener('click', e => {
        e.stopPropagation();
        const diff = card.querySelector('.prob-diff')?.textContent.trim() || '';
        const cat = card.querySelector('.prob-cat')?.textContent.trim() || '';
        const desc = card.querySelector('.prob-desc')?.textContent.trim() || '';
        const codeText = card.querySelector('.code-panel pre')?.textContent.trim() || '';
        const timeEl = card.querySelector('.complexity-row div:first-child')?.textContent.replace('Time:', '').trim() || '';
        const spaceEl = card.querySelector('.complexity-row div:last-child')?.textContent.replace('Space:', '').trim() || '';
        const pattern = data ? '**Pattern:** ' + data.pattern + '\n\n**Approach:**\n' + data.logic.map((l,i) => (i+1)+'. '+l).join('\n') + '\n\n' : '';
        const md = [
          '## ' + name,
          '**Difficulty:** ' + diff + '  |  **Category:** ' + cat,
          '',
          desc,
          '',
          pattern + '```python',
          codeText,
          '```',
          '',
          '**Time:** ' + timeEl + '  |  **Space:** ' + spaceEl,
        ].join('\n');
        navigator.clipboard.writeText(md).then(() => {
          mdBtn.textContent = '✓';
          setTimeout(() => mdBtn.textContent = 'MD', 1500);
        }).catch(() => {
          mdBtn.textContent = '!';
          setTimeout(() => mdBtn.textContent = 'MD', 1500);
        });
      });
      probHead.appendChild(mdBtn);
    }

    if (!data) return;
    const sol = card.querySelector('.prob-solution');
    const codePanel = sol?.querySelector('.code-panel');
    if (!sol || !codePanel) return;

    // Build approach block
    const approach = document.createElement('div');
    approach.className = 'prob-approach';
    approach.innerHTML =
      '<strong>Pattern: ' + data.pattern + '</strong>' +
      '<ul>' + data.logic.map(l => '<li>' + l + '</li>').join('') + '</ul>';
    sol.insertBefore(approach, codePanel);

    // Build visual block
    const pattern = document.createElement('div');
    pattern.className = 'prob-pattern';
    const escaped = data.visual
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    pattern.innerHTML =
      '<div class="prob-pattern-h">Visualization</div>' +
      '<pre>' + escaped + '</pre>';
    sol.insertBefore(pattern, codePanel);
  });
});
