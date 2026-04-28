function toggleIQ(el) {
  const ans = el.nextElementSibling;
  ans.classList.toggle('show');
  el.innerHTML = ans.classList.contains('show') ? '&#9660; hide answer' : '&#9658; show answer';
}

function switchCS(id, btn) {
  document.querySelectorAll('.cs-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.cs-content').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('cs-' + id).classList.add('active');
}
function switchCPT(id, btn) {
  document.querySelectorAll('.cpt-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.cpt-pane').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('cpt-' + id).classList.add('active');
}
function toggleSol(el) {
  const sol = el.nextElementSibling;
  sol.classList.toggle('show');
  el.textContent = sol.classList.contains('show') ? '\u25be hide solution' : '\u25b8 show solution';
}
function toggleSD(el) {
  const detail = el.nextElementSibling;
  detail.classList.toggle('show');
  el.textContent = detail.classList.contains('show') ? '\u25be hide details' : '\u25b8 show full design';
}

const TOPIC_DATA = {
  'data-structures': {
    icon: '⚙️', title: 'Data Structures', cat: 'CS Fundamentals',
    overview: 'Data structures are ways of organizing and storing data so it can be accessed and modified efficiently. Choosing the right one is often the difference between an O(n²) brute force and an O(n) elegant solution.',
    concepts: [
      '<strong>Array</strong> — Fixed-size, contiguous memory. O(1) access by index, O(n) insert/delete.',
      '<strong>Linked List</strong> — Nodes with pointers. O(1) insert/delete at known position, O(n) search.',
      '<strong>Stack</strong> — LIFO. Used in function calls, undo, parsing. push/pop are O(1).',
      '<strong>Queue</strong> — FIFO. Used in BFS, scheduling, buffering. enqueue/dequeue O(1).',
      '<strong>Hash Map</strong> — Key→value via hash function. O(1) average lookup, O(n) worst (collisions).',
      '<strong>Binary Search Tree</strong> — Ordered, recursive. O(log n) when balanced, O(n) when skewed.',
      '<strong>Heap</strong> — Tree-based priority queue. O(log n) insert/extract, O(1) peek min/max.',
      '<strong>Graph</strong> — Nodes + edges. Models networks, dependencies, paths. Stored as adjacency list/matrix.'
    ],
    qas: [
      { q: 'When would you use a linked list over an array?', a: 'When you need frequent inserts/deletes in the middle (O(1) if you have the pointer), and you don\'t need random access. Linked lists have overhead per node (the pointer itself).' },
      { q: 'How does a hash map handle collisions?', a: 'Two main strategies: chaining (each bucket is a linked list) or open addressing (probe to next slot). Modern hash maps resize when load factor exceeds ~0.75 to maintain O(1) average performance.' },
      { q: 'When is a balanced tree preferred over a hash map?', a: 'When you need ordered iteration, range queries (e.g., all keys between 10 and 50), or guaranteed O(log n) worst case. Hash maps lose ordering.' }
    ],
    resources: [
      { name: 'Visualgo — Data Structure Visualizations', url: 'https://visualgo.net/' },
      { name: 'NeetCode — DS&A Roadmap', url: 'https://neetcode.io/roadmap' }
    ]
  },
  'algorithms': {
    icon: '🔁', title: 'Algorithms', cat: 'CS Fundamentals',
    overview: 'Algorithms are step-by-step procedures for solving problems. The big interview categories are sorting, searching, recursion, dynamic programming, and graph traversal. Understanding patterns matters more than memorizing solutions.',
    concepts: [
      '<strong>Binary Search</strong> — Halve the search space. O(log n). Requires sorted input.',
      '<strong>Two Pointers</strong> — Move two indices to solve array problems.',
      '<strong>Sliding Window</strong> — Expand/contract a window over an array. Subarray problems with constraints.',
      '<strong>Recursion</strong> — Function calls itself with smaller input. Always need a base case.',
      '<strong>Dynamic Programming</strong> — Cache subproblem results to avoid recomputation.',
      '<strong>BFS</strong> — Queue-based. Finds shortest path in unweighted graphs.',
      '<strong>DFS</strong> — Stack/recursion-based. Connected components, topological sort, cycle detection.',
      '<strong>Greedy</strong> — Make locally optimal choice at each step.',
      '<strong>Divide & Conquer</strong> — Split problem in half, solve each, combine. Merge sort, quicksort.'
    ],
    qas: [
      { q: 'When should I use BFS vs DFS?', a: 'BFS for shortest path in unweighted graphs and level-order traversal. DFS for "does a path exist?", topological sort, cycle detection, and when memory is tight (BFS queue can be huge).' },
      { q: 'How do I recognize a DP problem?', a: 'Look for: optimal substructure (combining subproblem solutions) and overlapping subproblems (same subproblem solved many times). Classic signs: "find the minimum/maximum number of...", "in how many ways can you...".' },
      { q: 'What\'s the difference between memoization and tabulation?', a: 'Both are DP. Memoization is top-down recursion + cache. Tabulation is bottom-up iteration with a table (often faster, uses less stack memory).' }
    ],
    resources: [
      { name: 'NeetCode — Patterns Course', url: 'https://neetcode.io/' },
      { name: 'Algorithms by Sedgewick (Princeton)', url: 'https://algs4.cs.princeton.edu/' }
    ]
  },
  'oop-patterns': {
    icon: '🧩', title: 'OOP & Design Patterns', cat: 'CS Fundamentals',
    overview: 'Object-Oriented Programming organizes code around objects (data + behavior). Design patterns are battle-tested solutions to common design problems. Mastering OOP and SOLID principles is essential for any senior interview.',
    concepts: [
      '<strong>Encapsulation</strong> — Bundle data + methods, hide internal state.',
      '<strong>Inheritance</strong> — Child classes reuse parent class behavior. Favor composition.',
      '<strong>Polymorphism</strong> — Same interface, different behavior per type.',
      '<strong>Abstraction</strong> — Show only essentials, hide complexity.',
      '<strong>SOLID</strong> — Single responsibility, Open/closed, Liskov substitution, Interface segregation, Dependency inversion.',
      '<strong>Singleton</strong> — One instance globally.',
      '<strong>Factory</strong> — Create objects without exposing instantiation logic.',
      '<strong>Observer</strong> — Subjects notify subscribers of state changes.',
      '<strong>Strategy</strong> — Encapsulate interchangeable algorithms.',
      '<strong>Decorator</strong> — Wrap objects to add behavior dynamically.'
    ],
    qas: [
      { q: 'What is the difference between composition and inheritance?', a: 'Inheritance is "is-a" (Dog IS-A Animal). Composition is "has-a" (Car HAS-A Engine). Favor composition because inheritance creates tight coupling and brittle hierarchies.' },
      { q: 'Explain the Single Responsibility Principle.', a: 'A class should have one and only one reason to change. Split into AuthService, UserRepository, EmailService rather than one User class doing everything.' },
      { q: 'When would you use a Factory pattern?', a: 'When object creation is complex or the exact type depends on runtime info. Example: a NotificationFactory returning EmailNotification, SMSNotification, or PushNotification based on user preferences.' }
    ],
    resources: [
      { name: 'Refactoring.guru — Design Patterns', url: 'https://refactoring.guru/design-patterns' },
      { name: 'Clean Code by Robert Martin', url: 'https://www.oreilly.com/library/view/clean-code-a/9780136083238/' }
    ]
  },
  'concurrency': {
    icon: '🧵', title: 'Concurrency', cat: 'CS Fundamentals',
    overview: 'Concurrency is about dealing with many things at once. Parallelism is doing many things at once. Concurrency bugs (race conditions, deadlocks) are notoriously hard to reproduce.',
    concepts: [
      '<strong>Thread</strong> — Lightweight unit of execution within a process. Shares memory with siblings.',
      '<strong>Process</strong> — Independent execution unit with its own memory space.',
      '<strong>Mutex / Lock</strong> — Mutual exclusion. Only one thread can hold the lock at a time.',
      '<strong>Semaphore</strong> — Counter-based lock. Allows N threads in critical section.',
      '<strong>Race Condition</strong> — Outcome depends on thread scheduling. Bug source #1.',
      '<strong>Deadlock</strong> — Two+ threads waiting on each other forever.',
      '<strong>Async/Await</strong> — Cooperative concurrency. Single thread switches tasks at await points.',
      '<strong>Producer-Consumer</strong> — Classic pattern using a thread-safe queue.'
    ],
    qas: [
      { q: 'How do you prevent a deadlock?', a: 'Break one of the four Coffman conditions. Most practical: enforce a global lock ordering (always acquire lock A before lock B).' },
      { q: 'What\'s the difference between concurrency and parallelism?', a: 'Concurrency = dealing with many tasks simultaneously (interleaved on one CPU). Parallelism = executing multiple tasks at the same instant (multiple CPUs).' },
      { q: 'What is the GIL in Python?', a: 'The Global Interpreter Lock allows only one thread to execute Python bytecode at a time. For CPU-bound work, use multiprocessing. For I/O-bound, threads or async work fine.' }
    ],
    resources: [
      { name: 'Java Concurrency in Practice', url: 'https://jcip.net/' },
      { name: 'Python asyncio docs', url: 'https://docs.python.org/3/library/asyncio.html' }
    ]
  },
  'memory-management': {
    icon: '🧠', title: 'Memory Management', cat: 'CS Fundamentals',
    overview: 'Understanding how memory works (stack vs heap, GC, leaks) makes you a better engineer. Even with managed languages, memory bugs cause real production issues.',
    concepts: [
      '<strong>Stack</strong> — Fast, fixed-size, automatic. Local vars and function call frames.',
      '<strong>Heap</strong> — Slower, dynamic, manual or GC-managed. All long-lived objects.',
      '<strong>Garbage Collection</strong> — Automatic memory reclamation. Tracing GC, reference counting, generational GC.',
      '<strong>Stack Overflow</strong> — Too-deep recursion blows the stack.',
      '<strong>Memory Leak</strong> — Memory allocated but never freed. In GC languages, usually a forgotten reference.',
      '<strong>Generational GC</strong> — Young objects die fast → frequent minor GC. Old objects → rare major GC.',
      '<strong>RAII (C++)</strong> — Resources tied to object lifetime. Destructor releases automatically.'
    ],
    qas: [
      { q: 'How do memory leaks happen in garbage-collected languages?', a: 'Anything still reachable can\'t be collected. Common: global variables, event listeners not removed, closures capturing large objects, caches without eviction, forgotten timers.' },
      { q: 'Stack vs heap allocation — why does it matter?', a: 'Stack is ~100x faster (just bumps a pointer), automatic cleanup. Heap requires finding a free block and risks fragmentation.' },
      { q: 'What is generational garbage collection?', a: 'Based on the observation that most objects die young. Young gen is collected frequently and cheaply. Survivors get promoted to old gen, which is collected rarely but more expensively.' }
    ],
    resources: [
      { name: 'Garbage Collection Handbook', url: 'https://gchandbook.org/' },
      { name: 'V8 GC explainer', url: 'https://v8.dev/blog/trash-talk' }
    ]
  },
  'networking-web': {
    icon: '🌐', title: 'Networking & Web', cat: 'CS Fundamentals',
    overview: 'Networking is the plumbing of the internet. Every backend engineer should understand HTTP, TCP/IP, DNS, and how a request travels from a browser to a server and back.',
    concepts: [
      '<strong>TCP</strong> — Reliable, ordered, connection-oriented. Used for HTTP, SSH, databases.',
      '<strong>UDP</strong> — Fast, unreliable, connectionless. Used for video streaming, gaming, DNS.',
      '<strong>HTTP/HTTPS</strong> — Request-response protocol over TCP. HTTPS adds TLS for encryption.',
      '<strong>DNS</strong> — Maps domain names to IPs. Hierarchical (root → TLD → authoritative).',
      '<strong>TCP 3-way Handshake</strong> — SYN → SYN-ACK → ACK. Establishes connection.',
      '<strong>WebSocket</strong> — Persistent bidirectional connection over a single TCP socket.',
      '<strong>CORS</strong> — Browser security: requests to other origins need explicit server permission.',
      '<strong>Load Balancer</strong> — Distributes traffic across servers.'
    ],
    qas: [
      { q: 'What happens when you type "google.com" into your browser?', a: 'DNS resolution → TCP handshake → TLS handshake → HTTP request → server responds → browser parses HTML → fetches resources → renders.' },
      { q: 'When would you use UDP over TCP?', a: 'Real-time apps where dropped packets are better than delayed packets — video calls, gaming, live streaming, DNS queries.' },
      { q: 'Explain how HTTPS works.', a: 'Client connects → server sends certificate (signed by CA) → client verifies → key exchange → shared symmetric key derived → all traffic encrypted.' }
    ],
    resources: [
      { name: 'High Performance Browser Networking', url: 'https://hpbn.co/' },
      { name: 'How HTTPS works (comic)', url: 'https://howhttps.works/' }
    ]
  },
  'system-design': {
    icon: '🏗️', title: 'System Design', cat: 'Backend & Architecture',
    overview: 'System design interviews test how you architect large-scale systems. There\'s no single right answer — interviewers want to see how you reason about tradeoffs, capacity, scalability, and reliability.',
    concepts: [
      '<strong>Horizontal vs Vertical Scaling</strong> — Add more machines vs bigger machines.',
      '<strong>Load Balancer</strong> — Distributes traffic. Round-robin, least-connections, sticky sessions.',
      '<strong>Caching</strong> — Redis/Memcached. Reduces DB load. Cache-aside, write-through patterns.',
      '<strong>CDN</strong> — Geographic content distribution. Caches static assets near users.',
      '<strong>Database Sharding</strong> — Partition data across machines.',
      '<strong>Replication</strong> — Copy data for availability + read scaling.',
      '<strong>Message Queues</strong> — Decouple producers from consumers.',
      '<strong>Microservices</strong> — Small, independently deployed services.',
      '<strong>API Gateway</strong> — Single entry point. Auth, rate limiting, routing.',
      '<strong>CAP Theorem</strong> — Pick 2 of Consistency, Availability, Partition tolerance.'
    ],
    qas: [
      { q: 'How would you approach a system design interview?', a: '1) Clarify requirements (functional + non-functional). 2) Estimate scale. 3) Define APIs. 4) High-level diagram. 5) Deep dive into 1-2 components. 6) Discuss bottlenecks and tradeoffs.' },
      { q: 'When would you choose SQL vs NoSQL?', a: 'SQL: complex queries, joins, transactions, ACID. NoSQL: flexible schema, massive scale, eventual consistency OK. Many systems use both (polyglot persistence).' },
      { q: 'How do you scale a read-heavy system?', a: '(1) Add caching (Redis). (2) Add read replicas. (3) Use a CDN for static content. (4) Denormalize hot data. (5) Add search index.' }
    ],
    resources: [
      { name: 'System Design Primer (GitHub)', url: 'https://github.com/donnemartin/system-design-primer' },
      { name: 'ByteByteGo', url: 'https://bytebytego.com/' }
    ]
  },
  'databases-sql': {
    icon: '🗄️', title: 'Databases & SQL', cat: 'Backend & Architecture',
    overview: 'Almost every backend system has a database. Understanding indexing, transactions, and query optimization is non-negotiable.',
    concepts: [
      '<strong>SQL (Relational)</strong> — Structured tables, joins, ACID. PostgreSQL, MySQL.',
      '<strong>NoSQL</strong> — Flexible schemas. Document (Mongo), key-value (Redis), wide-column (Cassandra).',
      '<strong>Index</strong> — Data structure (usually B-tree) that speeds up reads. Slows writes.',
      '<strong>JOIN</strong> — Combine rows from multiple tables. Inner, left, right, full outer.',
      '<strong>ACID</strong> — Atomicity, Consistency, Isolation, Durability.',
      '<strong>Transaction Isolation</strong> — Read uncommitted, read committed, repeatable read, serializable.',
      '<strong>Normalization</strong> — Eliminate redundancy. 1NF/2NF/3NF. Tradeoff: more joins.',
      '<strong>Denormalization</strong> — Duplicate data for read performance.',
      '<strong>N+1 Problem</strong> — ORMs querying in loops. Fix with eager loading / JOIN.'
    ],
    qas: [
      { q: 'When should you add an index?', a: 'On columns frequently used in WHERE, JOIN, or ORDER BY. Don\'t index every column — each index slows down INSERT/UPDATE/DELETE.' },
      { q: 'Explain ACID.', a: 'Atomicity: all-or-nothing. Consistency: data follows all rules. Isolation: concurrent transactions don\'t interfere. Durability: committed data survives crashes.' },
      { q: 'What\'s the N+1 query problem?', a: 'You fetch N records, then loop through making a query for each — N+1 queries instead of 2. Fix with eager loading (JOIN), batching, or DataLoader pattern.' }
    ],
    resources: [
      { name: 'Use The Index, Luke!', url: 'https://use-the-index-luke.com/' },
      { name: 'PostgreSQL Tutorial', url: 'https://www.postgresqltutorial.com/' }
    ]
  },
  'apis': {
    icon: '📡', title: 'APIs', cat: 'Backend & Architecture',
    overview: 'APIs let systems talk to each other. REST is the dominant style, but GraphQL and gRPC have specific strengths.',
    concepts: [
      '<strong>REST</strong> — Resources + HTTP verbs. Stateless. Easy to cache.',
      '<strong>GraphQL</strong> — Single endpoint, client specifies exactly what data it wants.',
      '<strong>gRPC</strong> — Binary, HTTP/2-based. Fast, strongly typed (Protobuf).',
      '<strong>Pagination</strong> — Offset (simple but slow), cursor-based (scalable).',
      '<strong>Rate Limiting</strong> — Token bucket, leaky bucket. Protects against abuse.',
      '<strong>Authentication</strong> — API keys, JWT, OAuth 2.0.',
      '<strong>Idempotency</strong> — Same request → same result. Critical for retries.'
    ],
    qas: [
      { q: 'When would you choose GraphQL over REST?', a: 'When clients need flexible data shapes, when you want to avoid multiple round trips, or when data is highly relational. REST wins for simple CRUD, public APIs, and file uploads.' },
      { q: 'How would you design a rate limiter?', a: 'Token bucket: each user has N tokens, refilled at rate R per second. Each request consumes 1. If empty → 429. Store in Redis with atomic INCR ops.' },
      { q: 'What\'s an idempotent API?', a: 'Calling it multiple times produces the same result. GET, PUT, DELETE are idempotent. POST is not. For payments, clients send an "Idempotency-Key" header.' }
    ],
    resources: [
      { name: 'REST API Tutorial', url: 'https://restfulapi.net/' },
      { name: 'GraphQL official docs', url: 'https://graphql.org/learn/' }
    ]
  },
  'caching': {
    icon: '📊', title: 'Caching', cat: 'Backend & Architecture',
    overview: '"There are only two hard things in CS: cache invalidation and naming things." Caching is the highest-leverage performance optimization.',
    concepts: [
      '<strong>Cache-Aside</strong> — App checks cache, falls back to DB on miss, populates cache. Most common.',
      '<strong>Write-Through</strong> — Writes go to cache + DB simultaneously.',
      '<strong>Write-Behind</strong> — Writes go to cache, async to DB. Fast writes, risk of data loss.',
      '<strong>TTL</strong> — Time-to-live. Auto-expire entries.',
      '<strong>LRU</strong> — Least Recently Used eviction.',
      '<strong>Cache Stampede</strong> — Hot key expires → N requests hit DB simultaneously.',
      '<strong>Redis</strong> — In-memory key-value store. Supports lists, sets, pub/sub, streams.'
    ],
    qas: [
      { q: 'How do you handle cache invalidation?', a: 'TTL (simple, may serve stale), write-through (consistent but slower writes), explicit invalidation (delete on write), or event-driven (publish on update). Often a mix.' },
      { q: 'What\'s a cache stampede?', a: 'Popular cache entry expires → hundreds of requests miss simultaneously and hammer the DB. Solutions: lock (only one request fetches), refresh-ahead, add jitter to TTLs.' },
      { q: 'When does caching hurt more than it helps?', a: 'When data changes often relative to read frequency, when correctness is critical, when cache hit rate is low, or when invalidation logic is too complex.' }
    ],
    resources: [
      { name: 'Redis Documentation', url: 'https://redis.io/docs/' },
      { name: 'Caching strategies (AWS)', url: 'https://aws.amazon.com/caching/' }
    ]
  },
  'message-queues': {
    icon: '📨', title: 'Message Queues', cat: 'Backend & Architecture',
    overview: 'Message queues decouple producers from consumers, enabling async processing, load smoothing, and resilience.',
    concepts: [
      '<strong>Queue</strong> — Point-to-point. One message, one consumer.',
      '<strong>Pub/Sub Topic</strong> — One message, many subscribers.',
      '<strong>Kafka</strong> — Distributed log. High throughput, ordered partitions, retention.',
      '<strong>RabbitMQ</strong> — Traditional broker. Flexible routing, per-message ack.',
      '<strong>At-least-once</strong> — Reliable but messages may be duplicated → consumers must be idempotent.',
      '<strong>Dead Letter Queue</strong> — Stash for messages that repeatedly fail processing.',
      '<strong>Backpressure</strong> — When consumers can\'t keep up. Slow producers or scale consumers.'
    ],
    qas: [
      { q: 'When should you add a message queue?', a: 'When producers and consumers need to be decoupled, when load is bursty, for async work, or for fan-out (one event triggers many handlers).' },
      { q: 'Kafka vs RabbitMQ — when to use each?', a: 'Kafka: high throughput, event sourcing, log aggregation, replay. RabbitMQ: complex routing, lower volume, traditional task queues.' },
      { q: 'How do you handle duplicate messages?', a: 'Make consumers idempotent — processing the same message twice produces the same result. Use idempotency keys and a dedup store (Redis with TTL).' }
    ],
    resources: [
      { name: 'Kafka: The Definitive Guide', url: 'https://www.confluent.io/resources/kafka-the-definitive-guide-v2/' },
      { name: 'RabbitMQ Tutorials', url: 'https://www.rabbitmq.com/tutorials/' }
    ]
  },
  'software-architecture': {
    icon: '📐', title: 'Software Architecture', cat: 'Backend & Architecture',
    overview: 'Architecture is about the big shape of your system — how it\'s split, how parts communicate, and how it evolves.',
    concepts: [
      '<strong>Monolith</strong> — Single deployable unit. Simple, fast to develop.',
      '<strong>Microservices</strong> — Small independent services. Scales teams. Adds operational complexity.',
      '<strong>Modular Monolith</strong> — Single deployment, strong internal boundaries. Often the sweet spot.',
      '<strong>Domain-Driven Design (DDD)</strong> — Code structure mirrors business domain.',
      '<strong>Event Sourcing</strong> — Store every state change as an event. Replay to rebuild state.',
      '<strong>CQRS</strong> — Separate models for commands (writes) and queries (reads).',
      '<strong>Saga Pattern</strong> — Manage distributed transactions via choreography or orchestration.'
    ],
    qas: [
      { q: 'Should I start with microservices?', a: 'No. Start with a monolith. Microservices add network calls, distributed debugging, deployment complexity. Extract services only when you have clear scaling pain.' },
      { q: 'When does event sourcing make sense?', a: 'When audit trails are critical (banking, healthcare), when you need to replay events. Avoid when your data is simple CRUD.' },
      { q: 'What\'s choreography vs orchestration in sagas?', a: 'Choreography: each service listens for events and reacts independently. Orchestration: a central coordinator tells each service what to do. Tradeoff: coupling vs visibility.' }
    ],
    resources: [
      { name: 'Building Evolutionary Architectures', url: 'https://evolutionaryarchitecture.com/' },
      { name: 'Domain-Driven Design Reference', url: 'https://www.domainlanguage.com/ddd/reference/' }
    ]
  },
  'git': {
    icon: '🌳', title: 'Git', cat: 'DevOps & Cloud',
    overview: 'Git is the de-facto version control system. Beyond add/commit/push, real engineers know rebasing, conflict resolution, and how to recover from disasters.',
    concepts: [
      '<strong>Working dir → Staging → Repo</strong> — Three areas. add stages, commit moves to repo.',
      '<strong>Branch</strong> — Lightweight pointer to a commit. Cheap to create.',
      '<strong>Merge</strong> — Joins branches. Creates merge commit.',
      '<strong>Rebase</strong> — Replays your commits on top of another branch. Linear history.',
      '<strong>Cherry-pick</strong> — Apply one specific commit from another branch.',
      '<strong>Stash</strong> — Temporarily save uncommitted work.',
      '<strong>Reflog</strong> — Local log of all HEAD changes. Recover "lost" commits with this.'
    ],
    qas: [
      { q: 'What\'s the difference between merge and rebase?', a: 'Merge preserves history with a merge commit (non-linear). Rebase rewrites commits to apply on top of another branch (linear). Never rebase shared/public branches.' },
      { q: 'How do you undo a commit you\'ve already pushed?', a: 'Use git revert <sha> — creates a new commit that undoes changes. Safe for shared branches.' },
      { q: 'You accidentally committed to the wrong branch?', a: 'git log to find SHA. Switch to correct branch: git cherry-pick <sha>. Go back and git reset --hard HEAD~1.' }
    ],
    resources: [
      { name: 'Pro Git book (free)', url: 'https://git-scm.com/book/en/v2' },
      { name: 'Oh Shit, Git!?!', url: 'https://ohshitgit.com/' }
    ]
  },
  'linux-bash': {
    icon: '🐧', title: 'Linux & Bash', cat: 'DevOps & Cloud',
    overview: 'Most servers run Linux. Comfort with the shell is a baseline skill — you\'ll debug production, write deployment scripts, and use these commands daily.',
    concepts: [
      '<strong>File System</strong> — / is root. /etc (config), /var (logs/data), /home (users), /tmp (temporary).',
      '<strong>Permissions</strong> — rwx for owner/group/others. chmod 755 = rwxr-xr-x.',
      '<strong>Pipes & Redirection</strong> — | chains commands, > redirects to file, >> appends.',
      '<strong>grep</strong> — Search text. -r recursive, -i case-insensitive, -n line numbers.',
      '<strong>find</strong> — Locate files by name, size, mtime.',
      '<strong>SSH</strong> — Remote shell. Use key-based auth.',
      '<strong>Cron</strong> — Schedule tasks.'
    ],
    qas: [
      { q: 'How do you find which process is using port 8080?', a: 'lsof -i :8080 or netstat -tulpn | grep 8080 or ss -tulpn | grep 8080.' },
      { q: 'How do you check disk usage?', a: 'df -h for filesystem-level. du -sh * for current directory. du -ah / | sort -rh | head -20 for big files.' },
      { q: 'Server is running slow — what do you check?', a: 'top/htop for CPU/memory. df -h for disk full. iostat for disk I/O. netstat -an | wc -l for connection count. dmesg | tail for kernel errors.' }
    ],
    resources: [
      { name: 'The Linux Command Line (book, free)', url: 'https://linuxcommand.org/tlcl.php' },
      { name: 'explainshell.com', url: 'https://explainshell.com/' }
    ]
  },
  'docker': {
    icon: '🐳', title: 'Docker', cat: 'DevOps & Cloud',
    overview: 'Docker packages applications + dependencies into containers — lightweight, portable, reproducible.',
    concepts: [
      '<strong>Image</strong> — Read-only template (your app + OS + deps). Built from a Dockerfile.',
      '<strong>Container</strong> — Running instance of an image. Isolated process.',
      '<strong>Dockerfile</strong> — Instructions to build an image. FROM, COPY, RUN, CMD, ENV, EXPOSE.',
      '<strong>Layer</strong> — Each Dockerfile instruction creates a cached layer. Order matters.',
      '<strong>Volume</strong> — Persistent storage outside the container\'s lifecycle.',
      '<strong>Multi-stage build</strong> — Use one stage to build, copy artifacts to a smaller final image.',
      '<strong>Container vs VM</strong> — Containers share host kernel (lightweight). VMs run full OS (heavyweight).'
    ],
    qas: [
      { q: 'What\'s the difference between CMD and ENTRYPOINT?', a: 'ENTRYPOINT is the executable that always runs. CMD provides default arguments. Best practice: ENTRYPOINT ["python"] + CMD ["app.py"].' },
      { q: 'How do you reduce Docker image size?', a: '(1) Multi-stage builds. (2) Use slim/alpine base. (3) Combine RUN commands. (4) Use .dockerignore. (5) Remove apt caches in same RUN.' },
      { q: 'My container exits immediately — why?', a: 'Containers run as long as their main process runs. Check docker logs <id>. Common: app crashed, CMD finished, wrong entrypoint.' }
    ],
    resources: [
      { name: 'Docker official tutorial', url: 'https://docs.docker.com/get-started/' },
      { name: 'Play with Docker (sandbox)', url: 'https://labs.play-with-docker.com/' }
    ]
  },
  'kubernetes': {
    icon: '☸️', title: 'Kubernetes', cat: 'DevOps & Cloud',
    overview: 'Kubernetes orchestrates containers at scale — deployment, scaling, healing, networking.',
    concepts: [
      '<strong>Pod</strong> — Smallest deployable unit. Usually one container.',
      '<strong>Deployment</strong> — Manages a set of identical pods. Rolling updates, rollbacks.',
      '<strong>Service</strong> — Stable network endpoint for pods. ClusterIP, NodePort, LoadBalancer.',
      '<strong>Ingress</strong> — HTTP routing into the cluster.',
      '<strong>ConfigMap / Secret</strong> — Inject config or sensitive data into pods.',
      '<strong>StatefulSet</strong> — For stateful apps (DBs). Stable identity + storage.',
      '<strong>Helm</strong> — Package manager for K8s. Reusable templated manifests (charts).'
    ],
    qas: [
      { q: 'What\'s the difference between Deployment and StatefulSet?', a: 'Deployment: pods are interchangeable, no stable identity. Use for stateless apps. StatefulSet: pods get stable names (app-0, app-1), stable network IDs, persistent volume per pod. Use for DBs.' },
      { q: 'How does a rolling update work?', a: 'Creates new ReplicaSet with new image, gradually scales it up while scaling old one down. maxSurge and maxUnavailable control the pace.' },
      { q: 'Pod is stuck in Pending?', a: 'kubectl describe pod <name> shows events. Common: insufficient resources, PVC not bound, image pull error.' }
    ],
    resources: [
      { name: 'Kubernetes official tutorials', url: 'https://kubernetes.io/docs/tutorials/' },
      { name: 'Kubernetes the Hard Way', url: 'https://github.com/kelseyhightower/kubernetes-the-hard-way' }
    ]
  },
  'cloud-awsgcpazure': {
    icon: '☁️', title: 'Cloud (AWS/GCP/Azure)', cat: 'DevOps & Cloud',
    overview: 'Most production workloads run on AWS, GCP, or Azure. Knowing one well + understanding the concepts means you can pick up the others quickly.',
    concepts: [
      '<strong>Compute</strong> — EC2 / GCE / VM. Virtual machines.',
      '<strong>Serverless</strong> — Lambda / Cloud Functions / Azure Functions.',
      '<strong>Object Storage</strong> — S3 / GCS / Blob Storage. Durable, cheap, infinitely scalable.',
      '<strong>Managed K8s</strong> — EKS / GKE / AKS.',
      '<strong>IAM</strong> — Identity & Access Management. Principle of least privilege.',
      '<strong>VPC</strong> — Virtual Private Cloud. Subnets, route tables, security groups.',
      '<strong>CDN</strong> — CloudFront / Cloud CDN / Azure CDN.'
    ],
    qas: [
      { q: 'When should you use serverless vs containers?', a: 'Serverless: bursty/sporadic workloads, glue code, event-driven. Containers: long-running services, predictable load, complex apps.' },
      { q: 'How do you secure an S3 bucket?', a: 'Block public access. Use IAM roles. Enable versioning + MFA delete. Server-side encryption. Bucket policies for cross-account access. Audit with CloudTrail.' },
      { q: 'What is a VPC?', a: 'Your private network in the cloud — isolated subnets, route tables, security groups. DBs in private subnets, app servers in private subnets behind NAT, load balancers in public subnets.' }
    ],
    resources: [
      { name: 'AWS Well-Architected Framework', url: 'https://aws.amazon.com/architecture/well-architected/' },
      { name: 'Google Cloud Architecture Center', url: 'https://cloud.google.com/architecture' }
    ]
  },
  'cicd': {
    icon: '🚀', title: 'CI/CD', cat: 'DevOps & Cloud',
    overview: 'Continuous Integration / Continuous Delivery automates the path from commit to production.',
    concepts: [
      '<strong>CI</strong> — Every commit triggers automated build + tests.',
      '<strong>CD</strong> — Continuous Delivery (deploy-ready) or Deployment (auto-deployed).',
      '<strong>Pipeline</strong> — Sequence of stages: lint → build → test → deploy.',
      '<strong>Blue-Green Deployment</strong> — Two identical environments. Switch traffic, instant rollback.',
      '<strong>Canary Deployment</strong> — Roll out to small % of users first, monitor, expand.',
      '<strong>Feature Flags</strong> — Decouple deploy from release.',
      '<strong>GitOps</strong> — Git as source of truth for infra + deployments (ArgoCD, Flux).'
    ],
    qas: [
      { q: 'What makes a good CI pipeline?', a: 'Fast (under 10 min), deterministic, parallel where possible, fails fast (lint before tests), produces a versioned artifact, runs the same in dev and CI.' },
      { q: 'Blue-green vs canary deployment?', a: 'Blue-green: two full environments, instant cutover. Canary: gradual rollout (5% → 25% → 100%). Canary catches issues with real traffic; blue-green is simpler but doubles infra cost.' },
      { q: 'Why use feature flags?', a: 'Decouple deployment from release. Deploy code to prod with feature off. Turn on for internal users → beta → 1% → 100%. Easy rollback.' }
    ],
    resources: [
      { name: 'Continuous Delivery (book)', url: 'https://continuousdelivery.com/' },
      { name: 'GitHub Actions docs', url: 'https://docs.github.com/en/actions' }
    ]
  },
  'python-deep-dive': {
    icon: '🐍', title: 'Python Deep-Dive', cat: 'Programming Languages',
    overview: 'Python is your daily driver — going beyond the basics into decorators, generators, async, and the GIL is what separates a Python user from a Python engineer.',
    concepts: [
      '<strong>Decorators</strong> — Functions that modify functions. @app.route, @staticmethod, @cache.',
      '<strong>Generators</strong> — Lazy iterators using yield. Memory-efficient for large sequences.',
      '<strong>Context Managers</strong> — with statement. __enter__/__exit__ or @contextmanager.',
      '<strong>GIL</strong> — Global Interpreter Lock. Only one thread runs Python bytecode at a time.',
      '<strong>asyncio</strong> — Cooperative concurrency. async def, await, event loop.',
      '<strong>Dunder methods</strong> — __init__, __repr__, __eq__, __iter__, etc.',
      '<strong>Mutable default args</strong> — Classic gotcha: def f(x=[]) reuses the same list.'
    ],
    qas: [
      { q: 'What\'s a decorator and when would you write one?', a: 'A function that takes a function and returns a function. Use cases: logging, timing, caching, auth checks, registering routes.' },
      { q: 'When would you use a generator over a list?', a: 'When the dataset is large or infinite, or when you only need to iterate once. Generators yield values lazily — don\'t store the whole sequence in memory.' },
      { q: 'Explain async/await in Python.', a: 'asyncio is a single-threaded event loop. async def declares a coroutine; await yields control back. Great for I/O-bound code. Doesn\'t help CPU-bound — that needs multiprocessing.' }
    ],
    resources: [
      { name: 'Real Python tutorials', url: 'https://realpython.com/' },
      { name: 'Fluent Python (book)', url: 'https://www.oreilly.com/library/view/fluent-python-2nd/9781492056348/' }
    ]
  },
  'javascript': {
    icon: '🟨', title: 'JavaScript', cat: 'Programming Languages',
    overview: 'JavaScript runs in every browser and on most servers (Node.js). Its quirks — type coercion, this binding, the event loop — trip up everyone.',
    concepts: [
      '<strong>var / let / const</strong> — var is function-scoped (avoid). let/const are block-scoped.',
      '<strong>Hoisting</strong> — var declarations hoisted to top of scope.',
      '<strong>Closures</strong> — Functions remember their lexical scope even when invoked elsewhere.',
      '<strong>this binding</strong> — Depends on how function is called. Arrow functions inherit this from outer scope.',
      '<strong>Event loop</strong> — Single-threaded. Call stack + task queue + microtask queue.',
      '<strong>Promises</strong> — Async values. .then(), .catch(), or async/await.',
      '<strong>Type coercion</strong> — == coerces, === doesn\'t. Always use ===.'
    ],
    qas: [
      { q: 'Explain the event loop.', a: 'JS is single-threaded. When async tasks complete, callbacks go to the task queue. The event loop pulls from the queue when the call stack is empty. Microtasks (Promise callbacks) drain before regular tasks.' },
      { q: 'What is a closure?', a: 'A function that references variables from its outer scope, even after that scope finished executing. Useful for data privacy and currying.' },
      { q: 'var vs let vs const?', a: 'var: function-scoped, hoisted, allows redeclaration. let: block-scoped, no redeclaration. const: block-scoped, can\'t reassign. Modern JS: never use var.' }
    ],
    resources: [
      { name: 'You Don\'t Know JS (free)', url: 'https://github.com/getify/You-Dont-Know-JS' },
      { name: 'JavaScript.info', url: 'https://javascript.info/' }
    ]
  },
  'typescript': {
    icon: '🔷', title: 'TypeScript', cat: 'Programming Languages',
    overview: 'TypeScript is JavaScript with a static type system. It catches bugs at compile time and makes large codebases maintainable.',
    concepts: [
      '<strong>Types</strong> — string, number, boolean, any, unknown, never, void.',
      '<strong>Interfaces vs Types</strong> — Both define shapes. Interfaces extendable; types more flexible (unions).',
      '<strong>Generics</strong> — Type parameters. function id<T>(x: T): T.',
      '<strong>Union types</strong> — string | number. Discriminated unions for state modeling.',
      '<strong>Utility types</strong> — Partial<T>, Required<T>, Pick<T,K>, Omit<T,K>, Record<K,V>.',
      '<strong>any vs unknown</strong> — any = no type checking. unknown = typed but must narrow before use.',
      '<strong>Strict mode</strong> — strict: true. Catches null/undefined errors, implicit any.'
    ],
    qas: [
      { q: 'When to use interface vs type?', a: 'Interfaces for object shapes that might be extended. Types for unions, intersections, mapped types, and primitives. In practice: pick one and be consistent.' },
      { q: 'What\'s the difference between any and unknown?', a: 'any opts out of type checking (dangerous). unknown is type-safe — you must narrow it before doing anything. Always prefer unknown over any.' },
      { q: 'How do you type an API response?', a: 'Define an interface for the expected shape. Use a runtime validator (Zod, io-ts) to verify — TypeScript types are erased at runtime.' }
    ],
    resources: [
      { name: 'TypeScript Handbook', url: 'https://www.typescriptlang.org/docs/handbook/intro.html' },
      { name: 'Type Challenges', url: 'https://github.com/type-challenges/type-challenges' }
    ]
  },
  'llm-fundamentals': {
    icon: '🤖', title: 'LLM Fundamentals', cat: 'ML / AI Engineering',
    overview: 'Large Language Models are transformer-based neural networks trained to predict the next token. Understanding the basics — tokens, attention, context windows — makes you effective with any LLM tool.',
    concepts: [
      '<strong>Token</strong> — Smallest unit a model processes (~4 chars in English).',
      '<strong>Transformer</strong> — Architecture using self-attention. Replaced RNNs in 2017.',
      '<strong>Attention</strong> — Each token can "look at" every other token, weighing importance.',
      '<strong>Context Window</strong> — Max tokens the model can consider at once.',
      '<strong>Pretraining</strong> — Model learns next-token prediction on massive text.',
      '<strong>Fine-tuning</strong> — Further training on task-specific data.',
      '<strong>RLHF</strong> — Reinforcement Learning from Human Feedback. Aligns model with human preferences.',
      '<strong>Temperature</strong> — Controls randomness. 0 = deterministic, higher = more creative.'
    ],
    qas: [
      { q: 'How does attention work in transformers?', a: 'Each token computes Query, Key, Value vectors. Q·K dot products give attention weights, softmaxed. Output is weighted sum of Vs. Multi-head attention runs multiple parallel attention heads.' },
      { q: 'Why does context window size matter?', a: 'It bounds how much info the model can use at once. Larger windows are quadratically more expensive (attention is O(n²)) and accuracy degrades on info buried in the middle.' },
      { q: 'Temperature 0 vs temperature 1?', a: 'Temperature 0: deterministic, picks highest-probability token. Use for factual extraction, code. Higher (0.7-1.0): more diverse/creative. Use for brainstorming, dialogue.' }
    ],
    resources: [
      { name: 'The Illustrated Transformer', url: 'https://jalammar.github.io/illustrated-transformer/' },
      { name: 'Attention Is All You Need (paper)', url: 'https://arxiv.org/abs/1706.03762' }
    ]
  },
  'rag-architecture': {
    icon: '📚', title: 'RAG Architecture', cat: 'ML / AI Engineering',
    overview: 'Retrieval-Augmented Generation combines an LLM with a search system, letting the model answer questions over your private data without fine-tuning.',
    concepts: [
      '<strong>Indexing pipeline</strong> — Load docs → chunk → embed → store in vector DB.',
      '<strong>Chunking</strong> — Split docs into retrievable pieces.',
      '<strong>Embedding</strong> — Convert text to a vector.',
      '<strong>Vector DB</strong> — Stores embeddings + metadata. Pinecone, Weaviate, Chroma, Qdrant, FAISS.',
      '<strong>Retrieval</strong> — Embed user query, find K nearest chunks.',
      '<strong>Re-ranking</strong> — Rerank retrieved chunks with a smaller model for higher precision.',
      '<strong>Hybrid search</strong> — Combine vector search with BM25 keyword search.',
      '<strong>Query rewriting</strong> — LLM rewrites user query before retrieval (HyDE, multi-query).'
    ],
    qas: [
      { q: 'When is RAG better than fine-tuning?', a: 'RAG when: data changes often, you need source attribution, scale of data is large, you need to update knowledge fast. Fine-tuning for style/format. Most apps use RAG.' },
      { q: 'How do you choose chunk size?', a: 'Tradeoff: too small = lose context, too large = retrieval is noisy. Common starting point: 512-1000 tokens with 10-20% overlap. Always evaluate on your use case.' },
      { q: 'My RAG returns irrelevant chunks?', a: 'Check: (1) Embedding model quality. (2) Chunking strategy. (3) Add hybrid search (BM25). (4) Add reranking. (5) Query rewriting. (6) Metadata filtering.' }
    ],
    resources: [
      { name: 'LangChain RAG tutorial', url: 'https://python.langchain.com/docs/tutorials/rag/' },
      { name: 'Anthropic Contextual Retrieval', url: 'https://www.anthropic.com/news/contextual-retrieval' }
    ]
  },
  'vector-databases': {
    icon: '🔢', title: 'Vector Databases', cat: 'ML / AI Engineering',
    overview: 'Vector databases store and search embeddings. They power semantic search, RAG, and recommendation. The interesting part is how they search billions of vectors fast.',
    concepts: [
      '<strong>Distance metrics</strong> — Cosine similarity (most common), dot product, Euclidean.',
      '<strong>ANN (Approximate Nearest Neighbor)</strong> — Trade exact accuracy for huge speed.',
      '<strong>HNSW</strong> — Hierarchical Navigable Small World. Layered graph. Fast queries, more memory.',
      '<strong>IVF</strong> — Inverted File Index. Cluster vectors, search relevant clusters.',
      '<strong>PQ (Product Quantization)</strong> — Compress vectors to save space.',
      '<strong>Metadata filtering</strong> — Filter by tags before/after vector search.'
    ],
    qas: [
      { q: 'Cosine similarity vs dot product?', a: 'Cosine normalizes for magnitude — only direction matters. Dot product = cosine × magnitude. Use cosine when embeddings have variable magnitudes (most text models).' },
      { q: 'How does HNSW work?', a: 'Multi-layer graph. Top layer has few nodes with long-range connections; bottom has all nodes with short-range. Search starts at top, greedily moves closer, descends layers. Logarithmic search time.' },
      { q: 'When to self-host vs use Pinecone?', a: 'Self-host: cost at scale, data residency, strong infra team. Hosted: small team, ship fast, low/medium scale.' }
    ],
    resources: [
      { name: 'Pinecone Learning Center', url: 'https://www.pinecone.io/learn/' },
      { name: 'FAISS tutorial', url: 'https://github.com/facebookresearch/faiss/wiki' }
    ]
  },
  'langchain-llamaindex': {
    icon: '🦜', title: 'LangChain / LlamaIndex', cat: 'ML / AI Engineering',
    overview: 'LangChain and LlamaIndex are the dominant frameworks for building LLM applications. LangChain leans general-purpose (chains, agents, tools); LlamaIndex specializes in data-centric workflows (RAG, indexing).',
    concepts: [
      '<strong>LangChain Chains</strong> — Sequence operations: prompt → LLM → parse → next step.',
      '<strong>LangChain Agents</strong> — LLM decides which tool to call. ReAct pattern.',
      '<strong>LangChain Tools</strong> — Functions the agent can call.',
      '<strong>LCEL</strong> — LangChain Expression Language. Composable | (pipe) syntax.',
      '<strong>LangSmith / LangGraph</strong> — Observability + stateful agent orchestration.',
      '<strong>LlamaIndex Query Engine</strong> — Combines retriever + response synthesizer.',
      '<strong>LlamaIndex Index types</strong> — VectorStoreIndex, KeywordTableIndex, KnowledgeGraphIndex.'
    ],
    qas: [
      { q: 'When should you NOT use LangChain?', a: 'For simple prompt → completion calls (just use the SDK directly). When you need full control over prompts and retries. Many teams rewrite simpler parts as plain code.' },
      { q: 'LangChain vs LlamaIndex?', a: 'LlamaIndex if your app is mainly RAG/data ingestion. LangChain for agents, tool use, multi-step workflows. Many teams use both or skip frameworks for simple cases.' },
      { q: 'How do you debug an agent that loops?', a: 'Use LangSmith or your own tracing. Print every intermediate prompt + response. Make tool descriptions very clear. Limit max iterations. Sometimes a smarter model is the only fix.' }
    ],
    resources: [
      { name: 'LangChain docs', url: 'https://python.langchain.com/' },
      { name: 'LlamaIndex docs', url: 'https://docs.llamaindex.ai/' }
    ]
  },
  'prompt-engineering': {
    icon: '✍️', title: 'Prompt Engineering', cat: 'ML / AI Engineering',
    overview: 'Prompt engineering is how you get reliable behavior from LLMs. There are concrete patterns that consistently work. Underrated skill that compounds.',
    concepts: [
      '<strong>System / User / Assistant roles</strong> — System sets behavior; user/assistant alternate.',
      '<strong>Few-shot prompting</strong> — Show 2-5 examples of desired input → output.',
      '<strong>Chain-of-Thought (CoT)</strong> — "Think step by step." Improves reasoning.',
      '<strong>ReAct</strong> — Reason + Act pattern. LLM alternates thinking and using tools.',
      '<strong>Structured output</strong> — Ask for JSON. Use response_format for reliability.',
      '<strong>XML tags</strong> — Anthropic models work especially well with <tags>.',
      '<strong>Prompt injection</strong> — Malicious input changes model behavior. Defense: input separation.'
    ],
    qas: [
      { q: 'When does Chain-of-Thought help?', a: 'On multi-step reasoning: math, logic, planning, code generation. Doesn\'t help on simple lookups.' },
      { q: 'How do you get reliable JSON output?', a: '(1) Use the API structured output feature. (2) Provide a clear schema + examples. (3) Validate output and retry on parse failure.' },
      { q: 'What is prompt injection?', a: 'User input containing instructions that override your system prompt. Defenses: separate instructions from untrusted data with delimiters, validate input, output filtering.' }
    ],
    resources: [
      { name: 'Anthropic Prompt Engineering Guide', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview' },
      { name: 'OpenAI Prompt Engineering Guide', url: 'https://platform.openai.com/docs/guides/prompt-engineering' }
    ]
  },
  'embeddings': {
    icon: '🧬', title: 'Embeddings', cat: 'ML / AI Engineering',
    overview: 'Embeddings are vector representations of data. Texts with similar meaning end up close in vector space. They power semantic search, RAG, classification, and recommendations.',
    concepts: [
      '<strong>Embedding model</strong> — Neural net mapping text → vector (384-3072 dims).',
      '<strong>Cosine similarity</strong> — Standard metric for comparing embeddings. Range -1 to 1.',
      '<strong>Models</strong> — OpenAI text-embedding-3, Cohere embed-v3, BGE, Voyage, sentence-transformers.',
      '<strong>Multilingual embeddings</strong> — Same vector space across languages.',
      '<strong>Domain-specific</strong> — Fine-tuning on your data improves retrieval accuracy.',
      '<strong>Matryoshka embeddings</strong> — Nested embeddings: use first 256 dims for fast filter, full 1536 for precise rank.'
    ],
    qas: [
      { q: 'How do I evaluate which embedding model to use?', a: 'Build a small eval set with queries + relevant docs from your domain. Measure recall@k, MRR, NDCG. Don\'t trust generic benchmarks — your domain may behave differently.' },
      { q: 'Can I use embeddings for classification?', a: 'Yes — embed labeled examples, embed new input, find K-nearest. Take majority vote. Effective for many tasks without training.' },
      { q: 'Why might cosine similarity be misleading?', a: 'Random texts often have surprisingly high cosine similarity (0.6-0.7). What matters is RELATIVE similarity (top-K), not absolute scores.' }
    ],
    resources: [
      { name: 'MTEB Leaderboard', url: 'https://huggingface.co/spaces/mteb/leaderboard' },
      { name: 'Sentence-Transformers docs', url: 'https://www.sbert.net/' }
    ]
  },
  'cap-theorem': {
    icon: '🎭', title: 'CAP Theorem', cat: 'Distributed Systems',
    overview: 'CAP says: in a distributed system that experiences a network partition, you must choose between Consistency and Availability.',
    concepts: [
      '<strong>Consistency</strong> — Every read sees the most recent write.',
      '<strong>Availability</strong> — Every request gets a non-error response.',
      '<strong>Partition tolerance</strong> — System works despite network failures.',
      '<strong>CP system</strong> — Refuses requests during partition to stay consistent. ZooKeeper, etcd.',
      '<strong>AP system</strong> — Accepts requests, returns possibly stale data. Cassandra, DynamoDB.',
      '<strong>PACELC</strong> — Even without partitions, you trade Latency vs Consistency.',
      '<strong>Tunable consistency</strong> — Cassandra lets you pick per-query.'
    ],
    qas: [
      { q: 'Is Postgres CP or AP?', a: 'Single-node Postgres doesn\'t apply to CAP. With sync replication: CP. With async replication: AP-leaning. The answer depends on your replication setup.' },
      { q: 'Give an example of when AP makes more sense.', a: 'Shopping cart: better to accept items even if replicas are stale, then merge later. Social feed: stale posts are fine. DNS: serves stale records during partitions.' },
      { q: 'What is PACELC?', a: 'Extension of CAP. If Partition: A or C. Else (no partition): Latency or Consistency. DynamoDB is PA/EL — availability during partitions, latency otherwise.' }
    ],
    resources: [
      { name: 'CAP Twelve Years Later (Brewer)', url: 'https://www.infoq.com/articles/cap-twelve-years-later-how-the-rules-have-changed/' },
      { name: 'Designing Data-Intensive Applications', url: 'https://dataintensive.net/' }
    ]
  },
  'consensus-algorithms': {
    icon: '🤝', title: 'Consensus Algorithms', cat: 'Distributed Systems',
    overview: 'Consensus algorithms (Raft, Paxos) let a group of distributed nodes agree on a value despite failures.',
    concepts: [
      '<strong>Consensus</strong> — All non-faulty nodes agree on a single value.',
      '<strong>Raft</strong> — Designed to be understandable. Strong leader, log replication, leader election.',
      '<strong>Paxos</strong> — Original consensus algorithm. Notoriously hard to understand.',
      '<strong>Quorum</strong> — Majority of nodes (N/2 + 1). Required for reads and writes in CP systems.',
      '<strong>Leader election</strong> — Cluster picks a primary via heartbeat timeouts + voting.',
      '<strong>Log replication</strong> — Leader appends to log, replicates to followers, commits when majority acks.',
      '<strong>Split-brain</strong> — Two leaders elected after partition. Quorum requirement prevents this.'
    ],
    qas: [
      { q: 'Why do we need consensus algorithms?', a: 'Nodes can crash, networks partition, messages can be reordered. Without consensus, you can\'t safely replicate state, elect a leader, or maintain a consistent log.' },
      { q: 'Why does Raft require an odd number of nodes?', a: 'Quorum needs majority. With 3 nodes, quorum = 2 — tolerates 1 failure. With 4, quorum = 3 — also tolerates only 1 failure. Odd numbers maximize fault tolerance per node.' },
      { q: 'What happens during a network partition in Raft?', a: 'Minority partition can\'t form quorum → becomes read-only. Majority continues operating. When partition heals, the minority leader sees a higher term and steps down.' }
    ],
    resources: [
      { name: 'The Raft Paper (very readable)', url: 'https://raft.github.io/raft.pdf' },
      { name: 'Raft visualization', url: 'http://thesecretlivesofdata.com/raft/' }
    ]
  },
  'oauth-20-oidc': {
    icon: '🎟️', title: 'OAuth 2.0 & OIDC', cat: 'Security Deep-Dive',
    overview: 'OAuth 2.0 is the standard for delegated authorization. OIDC adds authentication on top. Used by every "Sign in with Google" button.',
    concepts: [
      '<strong>OAuth 2.0</strong> — Authorization framework. App gets access token to call API on user\'s behalf.',
      '<strong>OIDC</strong> — Authentication layer on OAuth. Adds ID token (JWT) with user identity.',
      '<strong>Authorization Code flow</strong> — Standard for web apps. Code exchanged for token server-side.',
      '<strong>PKCE</strong> — Extension for mobile/SPAs. Prevents code interception.',
      '<strong>Client Credentials</strong> — Machine-to-machine. No user involved.',
      '<strong>Refresh token</strong> — Long-lived token to get new access tokens.',
      '<strong>JWT</strong> — Self-contained token (header.payload.signature). Base64, not encrypted.',
      '<strong>OAuth ≠ Authentication</strong> — OAuth grants API access. Use OIDC for "who is the user".'
    ],
    qas: [
      { q: 'What\'s PKCE and why is it needed?', a: 'Mobile/SPA apps can\'t safely store a client secret. PKCE: client generates code_verifier, sends its hash (code_challenge) when starting OAuth. When exchanging code for token, sends original verifier. Server checks hash matches — proves same client did both steps.' },
      { q: 'JWT vs session token?', a: 'Sessions: server stores state, easy to revoke. JWTs: stateless, can\'t easily revoke (must wait for expiry or maintain blocklist). JWTs win for APIs and microservices. Sessions for web apps where revocation matters.' },
      { q: 'Can I put user roles in a JWT?', a: 'Yes (common) — but when roles change, the user keeps old JWT until it expires. For short access tokens (5 min) this is fine. For day-long tokens, you need a token blocklist or force re-auth.' }
    ],
    resources: [
      { name: 'OAuth 2.0 Simplified', url: 'https://www.oauth.com/' },
      { name: 'OIDC docs', url: 'https://openid.net/developers/how-connect-works/' }
    ]
  },
  'observability': {
    icon: '📉', title: 'Observability', cat: 'DevOps & Cloud',
    overview: 'Observability is the ability to understand what\'s happening inside a system by examining its outputs. The three pillars — logs, metrics, traces — let you debug production issues without SSH-ing into servers.',
    concepts: [
      '<strong>Logs</strong> — Timestamped text records of events. Structured (JSON) >> unstructured. ELK stack, Loki.',
      '<strong>Metrics</strong> — Numerical time-series data (request rate, error rate, latency). Prometheus, Datadog.',
      '<strong>Traces</strong> — End-to-end request path across services. Jaeger, Zipkin, OpenTelemetry.',
      '<strong>OpenTelemetry (OTel)</strong> — Vendor-neutral standard for telemetry. SDKs for every language.',
      '<strong>SLI / SLO / SLA</strong> — Service Level Indicator (metric), Objective (target), Agreement (contract).',
      '<strong>RED method</strong> — Rate, Errors, Duration. For request-driven services.',
      '<strong>USE method</strong> — Utilization, Saturation, Errors. For infrastructure resources.',
      '<strong>Alerting</strong> — Alert on symptoms (user impact), not causes. Avoid alert fatigue.',
      '<strong>Grafana</strong> — Dashboard + visualization. Connects to Prometheus, Loki, Tempo, and dozens more.',
      '<strong>On-call</strong> — Runbooks, escalation policies, blameless postmortems.'
    ],
    qas: [
      { q: 'What\'s the difference between monitoring and observability?', a: 'Monitoring is "does this known metric look healthy?" — predefined dashboards and alerts. Observability is "I can ask ANY question about system behavior" — high-cardinality data that lets you debug novel issues. Monitoring tells you something broke; observability helps you find why.' },
      { q: 'How do you set up good alerting?', a: 'Alert on user-facing symptoms (error rate, latency p99), not low-level causes (CPU at 80%). Use severity levels (page vs ticket). Add runbooks to every alert. Review alert noise monthly — if you\'re ignoring alerts, delete or fix them.' },
      { q: 'What is distributed tracing?', a: 'Each request gets a trace ID propagated across services. Each service creates a "span" with timing and metadata. Visualized as a waterfall diagram showing where time is spent. Essential for debugging latency in microservices.' }
    ],
    resources: [
      { name: 'Google SRE Book (free)', url: 'https://sre.google/sre-book/table-of-contents/' },
      { name: 'OpenTelemetry docs', url: 'https://opentelemetry.io/docs/' }
    ]
  },
  'testing': {
    icon: '🧪', title: 'Testing', cat: 'DevOps & Cloud',
    overview: 'Testing is how you ship with confidence. The testing pyramid — unit at the base, integration in the middle, e2e at the top — is the foundational mental model. Fast, reliable tests unlock CI/CD.',
    concepts: [
      '<strong>Unit tests</strong> — Test one function/class in isolation. Fast, many of these. pytest, Jest.',
      '<strong>Integration tests</strong> — Test multiple components together. DB queries, API calls.',
      '<strong>End-to-end (E2E)</strong> — Test full user flows. Slow, brittle. Cypress, Playwright, Selenium.',
      '<strong>Mocking</strong> — Replace real dependencies with fakes. unittest.mock, sinon.',
      '<strong>TDD</strong> — Test-Driven Development. Write test first, then code to pass it. Red → Green → Refactor.',
      '<strong>Coverage</strong> — % of code exercised by tests. 80% is a common target; 100% is often wasteful.',
      '<strong>Property-based testing</strong> — Generate random inputs, verify invariants hold. Hypothesis (Python), fast-check (JS).',
      '<strong>Contract testing</strong> — Verify API contracts between services. Pact.',
      '<strong>Flaky tests</strong> — Tests that pass/fail randomly. Cancer to CI. Fix or delete immediately.',
      '<strong>Test fixtures</strong> — Reusable setup/teardown for tests. @pytest.fixture, beforeEach.'
    ],
    qas: [
      { q: 'How many tests should I write?', a: 'Follow the testing pyramid: lots of unit tests (fast, cheap), fewer integration tests, minimal e2e. A good ratio might be 70/20/10. The goal is confidence in deployments with fast feedback. If your tests take 30+ minutes, you have too many slow tests.' },
      { q: 'When should I mock and when should I use real dependencies?', a: 'Mock external services you don\'t control (third-party APIs, payment providers). Use real dependencies when practical (in-memory DB, testcontainers for Docker-based testing). Over-mocking leads to tests that pass but don\'t catch real bugs.' },
      { q: 'Is 100% code coverage worth pursuing?', a: 'Usually not. Diminishing returns after 80-90%. The last 10% often covers error handling and edge cases that are hard to trigger — effort is better spent on integration tests. Coverage measures lines executed, not correctness.' }
    ],
    resources: [
      { name: 'Testing Python (Real Python)', url: 'https://realpython.com/python-testing/' },
      { name: 'Kent Beck — Test-Driven Development', url: 'https://www.oreilly.com/library/view/test-driven-development/0321146530/' }
    ]
  },
  'java': {
    icon: '☕', title: 'Java', cat: 'Programming Languages',
    overview: 'Java powers enterprise software, Android apps, and massive distributed systems. The JVM is a masterpiece of engineering. Understanding generics, the memory model, and the collections framework is interview-essential.',
    concepts: [
      '<strong>JVM</strong> — Java Virtual Machine. Compiles bytecode, JIT optimizes hot paths. Platform independence.',
      '<strong>Generics</strong> — Type-safe collections. Type erasure means generics are compile-time only.',
      '<strong>Collections Framework</strong> — ArrayList, LinkedList, HashMap, TreeMap, HashSet, PriorityQueue.',
      '<strong>Streams API</strong> — Functional-style operations on collections. filter(), map(), reduce(), collect().',
      '<strong>Multithreading</strong> — Thread, Runnable, ExecutorService, CompletableFuture, synchronized.',
      '<strong>Garbage Collection</strong> — G1 (default), ZGC (low-latency), Shenandoah. Tuning matters at scale.',
      '<strong>Memory model</strong> — Heap (objects), stack (locals), metaspace (class metadata). -Xmx, -Xms flags.',
      '<strong>Interfaces vs Abstract Classes</strong> — Interfaces: contracts, multiple inheritance of type. Abstract: partial implementation.',
      '<strong>Spring Boot</strong> — Dominant web framework. Dependency injection, auto-config, REST endpoints.',
      '<strong>Records, sealed classes, pattern matching</strong> — Modern Java (17+) features. Less boilerplate.'
    ],
    qas: [
      { q: 'What is type erasure?', a: 'Java generics are compile-time only — at runtime, List<String> and List<Integer> are both just List. This means you can\'t do new T() or instanceof T at runtime. It\'s a backwards-compatibility choice from Java 5.' },
      { q: 'HashMap vs TreeMap — when to use each?', a: 'HashMap: O(1) average lookup, no ordering. TreeMap: O(log n) lookup, keys are sorted. Use TreeMap when you need range queries or ordered iteration. HashMap for everything else (95% of the time).' },
      { q: 'How does garbage collection work in the JVM?', a: 'The heap is divided into young gen (Eden + Survivor spaces) and old gen. Minor GC collects young gen frequently (most objects die young). Major/Full GC collects old gen (expensive, causes pauses). Modern collectors like ZGC achieve sub-millisecond pauses.' }
    ],
    resources: [
      { name: 'Effective Java by Joshua Bloch', url: 'https://www.oreilly.com/library/view/effective-java-3rd/9780134686097/' },
      { name: 'Baeldung Java tutorials', url: 'https://www.baeldung.com/' }
    ]
  },
  'go': {
    icon: '🐹', title: 'Go', cat: 'Programming Languages',
    overview: 'Go (Golang) is designed for simplicity, fast compilation, and concurrency. Built at Google for networked services. Docker, Kubernetes, Terraform, and Prometheus are all written in Go.',
    concepts: [
      '<strong>Goroutines</strong> — Lightweight threads (~2KB stack). Launch thousands cheaply with go func().',
      '<strong>Channels</strong> — Typed pipes for goroutine communication. Buffered and unbuffered.',
      '<strong>select</strong> — Like switch for channels. Wait on multiple channel operations.',
      '<strong>Interfaces</strong> — Implicit satisfaction. If your type has the methods, it implements the interface.',
      '<strong>Structs</strong> — No classes. Structs + methods + interfaces = Go\'s OOP.',
      '<strong>defer</strong> — Schedule function call to run when enclosing function returns. Great for cleanup.',
      '<strong>Error handling</strong> — No exceptions. Functions return (result, error). Check err != nil everywhere.',
      '<strong>Slices vs Arrays</strong> — Arrays are fixed-size (rare). Slices are dynamic views (use these).',
      '<strong>Pointers</strong> — Go has pointers but no pointer arithmetic. &x gets address, *p dereferences.',
      '<strong>go modules</strong> — Dependency management. go.mod + go.sum.'
    ],
    qas: [
      { q: 'Why does Go use explicit error handling instead of exceptions?', a: 'Go\'s philosophy: errors are values, not control flow. Forcing if err != nil at every call site makes error handling visible and intentional. Exceptions hide control flow. Verbose? Yes. Explicit? Also yes.' },
      { q: 'Goroutines vs threads — what\'s the difference?', a: 'Goroutines are multiplexed onto OS threads by Go\'s runtime scheduler (M:N threading). They\'re ~2KB vs ~1MB for OS threads. You can run millions of goroutines. The scheduler handles preemption, and channels replace the need for most locks.' },
      { q: 'When would you choose Go over Python?', a: 'Go wins for: compiled binaries (easy deployment), concurrency-heavy services, performance-critical APIs, CLI tools. Python wins for: data science, ML, rapid prototyping, scripting. Many teams use both — Go for services, Python for data/ML.' }
    ],
    resources: [
      { name: 'A Tour of Go (official)', url: 'https://go.dev/tour/' },
      { name: 'Go by Example', url: 'https://gobyexample.com/' }
    ]
  },
  'rust': {
    icon: '🦀', title: 'Rust', cat: 'Programming Languages',
    overview: 'Rust gives you C++ performance with memory safety — no garbage collector, no null pointers, no data races at compile time. Loved by developers, used for systems programming, WebAssembly, and CLIs.',
    concepts: [
      '<strong>Ownership</strong> — Every value has one owner. When owner goes out of scope, value is dropped.',
      '<strong>Borrowing</strong> — References (&T) borrow without taking ownership. &mut T for mutable borrow.',
      '<strong>Borrow checker</strong> — Compiler enforces: one &mut OR many &T, never both. Prevents data races.',
      '<strong>Lifetimes</strong> — Annotations telling the compiler how long references live. Often inferred.',
      '<strong>Traits</strong> — Like interfaces. Define shared behavior. impl Trait for Type.',
      '<strong>Enums + Pattern Matching</strong> — Algebraic data types. Option&lt;T&gt; (no null!), Result&lt;T,E&gt; (no exceptions!).',
      '<strong>No null</strong> — Option&lt;T&gt; is Some(value) or None. Must handle both. Compiler enforced.',
      '<strong>No garbage collector</strong> — Memory freed deterministically via ownership + RAII.',
      '<strong>Fearless concurrency</strong> — Ownership system prevents data races at compile time.',
      '<strong>cargo</strong> — Build system + package manager. cargo build, cargo test, cargo run.'
    ],
    qas: [
      { q: 'What problem does ownership solve?', a: 'Memory safety without garbage collection. In C/C++, use-after-free, double-free, and buffer overflows cause ~70% of security bugs. Rust\'s ownership rules make these impossible at compile time. The tradeoff: steeper learning curve and fighting the borrow checker.' },
      { q: 'When should I use Rust vs Go?', a: 'Rust: max performance, systems programming (OS, browsers, game engines), WebAssembly, when memory safety is critical. Go: networked services, DevOps tools, quick development, when you need fast compilation and easy concurrency. Rust is harder to learn but gives more control.' },
      { q: 'What are lifetimes?', a: 'Lifetimes tell the compiler how long a reference is valid. Most are inferred automatically. You annotate explicitly when the compiler can\'t figure it out — usually when a function returns a reference and the compiler needs to know which input it\'s tied to.' }
    ],
    resources: [
      { name: 'The Rust Book (official, free)', url: 'https://doc.rust-lang.org/book/' },
      { name: 'Rustlings exercises', url: 'https://github.com/rust-lang/rustlings' }
    ]
  },
  'c': {
    icon: '⚡', title: 'C++', cat: 'Programming Languages',
    overview: 'C++ powers game engines, operating systems, databases, compilers, and high-frequency trading. It offers unmatched control over hardware, but the complexity is massive. Modern C++ (17/20/23) is a different language than legacy C++.',
    concepts: [
      '<strong>Pointers</strong> — Raw memory addresses. Powerful but dangerous. Prefer smart pointers.',
      '<strong>References</strong> — Aliases to existing objects. Safer than pointers for passing data.',
      '<strong>RAII</strong> — Resource Acquisition Is Initialization. Destructors handle cleanup automatically.',
      '<strong>Smart pointers</strong> — unique_ptr (exclusive), shared_ptr (ref-counted), weak_ptr (non-owning).',
      '<strong>Move semantics</strong> — Transfer ownership without copying. std::move, rvalue references (&&).',
      '<strong>Templates</strong> — Compile-time generics. Powerful but error messages are horrific.',
      '<strong>STL</strong> — Standard Template Library. vector, map, unordered_map, set, queue, algorithm.',
      '<strong>Virtual functions</strong> — Runtime polymorphism via vtable. virtual + override.',
      '<strong>const correctness</strong> — Mark everything const that shouldn\'t change. Catches bugs at compile time.',
      '<strong>Undefined behavior</strong> — Accessing freed memory, signed overflow, etc. Compiler can do anything.'
    ],
    qas: [
      { q: 'unique_ptr vs shared_ptr — when to use each?', a: 'unique_ptr for sole ownership (95% of cases). Zero overhead. shared_ptr when multiple owners genuinely need the same object (reference counting has overhead). weak_ptr to observe a shared_ptr without extending lifetime (avoids cycles).' },
      { q: 'What is RAII and why does it matter?', a: 'Tie resource lifetime to object lifetime. Constructor acquires (open file, allocate memory), destructor releases. When the object goes out of scope, cleanup happens automatically — even during exceptions. It\'s how C++ achieves memory safety without GC.' },
      { q: 'What are rvalue references and move semantics?', a: 'Instead of copying a temporary object (expensive), you "move" its guts to the new owner (cheap pointer swap). std::move casts to rvalue reference (&&), enabling the move constructor. Critical for performance with large objects, containers, and return values.' }
    ],
    resources: [
      { name: 'C++ Core Guidelines', url: 'https://isocpp.github.io/CppCoreGuidelines/' },
      { name: 'learncpp.com', url: 'https://www.learncpp.com/' }
    ]
  },
  'sql-variants': {
    icon: '💎', title: 'SQL Variants', cat: 'Programming Languages',
    overview: 'While standard SQL is portable, every database adds its own syntax and features. Knowing the differences between PostgreSQL, MySQL, and T-SQL helps you write better queries and avoid gotchas when switching.',
    concepts: [
      '<strong>PostgreSQL</strong> — Most feature-rich open-source DB. JSONB, arrays, CTEs, window functions, extensions.',
      '<strong>MySQL</strong> — Most widely deployed. Simpler, fast reads. InnoDB (ACID) vs MyISAM (legacy).',
      '<strong>T-SQL</strong> — Microsoft SQL Server dialect. TOP instead of LIMIT, ISNULL vs COALESCE quirks.',
      '<strong>JSONB (Postgres)</strong> — Binary JSON storage with indexing. Query JSON fields with -> and ->> operators.',
      '<strong>Upsert syntax</strong> — Postgres: INSERT ... ON CONFLICT DO UPDATE. MySQL: INSERT ... ON DUPLICATE KEY UPDATE.',
      '<strong>String concatenation</strong> — Postgres: ||. MySQL: CONCAT(). T-SQL: + or CONCAT().',
      '<strong>Auto-increment</strong> — Postgres: SERIAL/BIGSERIAL or GENERATED ALWAYS AS IDENTITY. MySQL: AUTO_INCREMENT.',
      '<strong>Full-text search</strong> — Postgres: tsvector/tsquery (built-in). MySQL: FULLTEXT indexes.',
      '<strong>ENUM types</strong> — Postgres supports natively. MySQL supports but migration is painful.'
    ],
    qas: [
      { q: 'PostgreSQL vs MySQL — when to choose which?', a: 'PostgreSQL: complex queries, JSONB, advanced types, data integrity, PostGIS for geo, extensions. MySQL: simple CRUD apps, read-heavy workloads, WordPress/legacy ecosystems. Postgres is generally the better default for new projects.' },
      { q: 'What are common SQL portability gotchas?', a: 'LIMIT/OFFSET (Postgres, MySQL) vs TOP (T-SQL). Boolean types (Postgres native, MySQL uses TINYINT). Date functions differ everywhere. String quoting: single quotes for values, identifier quoting varies ("double" in Postgres, backtick in MySQL).' },
      { q: 'When would you use JSONB in Postgres?', a: 'For semi-structured data that varies per row (user preferences, event metadata, API responses). Don\'t use it as a replacement for proper relational modeling — you lose joins, constraints, and indexing granularity.' }
    ],
    resources: [
      { name: 'PostgreSQL Tutorial', url: 'https://www.postgresqltutorial.com/' },
      { name: 'MySQL vs PostgreSQL comparison', url: 'https://www.bytebase.com/blog/postgres-vs-mysql/' }
    ]
  },
  'fine-tuning-vs-rag': {
    icon: '🎯', title: 'Fine-tuning vs RAG', cat: 'ML / AI Engineering',
    overview: 'The biggest architectural decision in LLM apps: do you fine-tune a model on your data, or use RAG to retrieve relevant context at runtime? The answer is almost always "start with RAG", but fine-tuning has its place.',
    concepts: [
      '<strong>RAG</strong> — Retrieve relevant docs at query time, stuff into prompt. No model changes needed.',
      '<strong>Fine-tuning</strong> — Further train the model on your data. Changes model weights.',
      '<strong>LoRA</strong> — Low-Rank Adaptation. Fine-tune a small number of extra parameters (efficient).',
      '<strong>QLoRA</strong> — LoRA on a quantized (4-bit) model. Fine-tune with less GPU memory.',
      '<strong>PEFT</strong> — Parameter-Efficient Fine-Tuning. Umbrella term for LoRA, prefix tuning, adapters.',
      '<strong>Instruction tuning</strong> — Fine-tune on (instruction, response) pairs. Makes base models follow instructions.',
      '<strong>RLHF</strong> — Train a reward model from human preferences, then optimize the LLM against it.',
      '<strong>DPO</strong> — Direct Preference Optimization. Simpler alternative to RLHF (no separate reward model).',
      '<strong>Data quality > data quantity</strong> — 1K high-quality examples often beats 100K noisy ones.',
      '<strong>Evaluation</strong> — Always compare fine-tuned vs base+RAG on YOUR tasks before deciding.'
    ],
    qas: [
      { q: 'When should I fine-tune instead of using RAG?', a: 'Fine-tune when: you need to teach style/format/tone (legal writing, medical reports), when latency matters (RAG adds retrieval time), when the model needs to internalize domain patterns (not just facts), or when you can\'t fit relevant context in the prompt. RAG for everything else.' },
      { q: 'How much data do I need for fine-tuning?', a: 'Depends on the task. For style/format adaptation: 50-500 high-quality examples often works (with LoRA). For teaching new knowledge: much more, and even then the model may hallucinate. Quality always trumps quantity.' },
      { q: 'Can I combine RAG and fine-tuning?', a: 'Yes, and it\'s often the best approach. Fine-tune to teach the model your domain\'s style and reasoning patterns. Use RAG to provide current, factual context at runtime. The fine-tuned model is better at using the retrieved context effectively.' }
    ],
    resources: [
      { name: 'Hugging Face PEFT library', url: 'https://huggingface.co/docs/peft/' },
      { name: 'LoRA paper', url: 'https://arxiv.org/abs/2106.09685' }
    ]
  },
  'llm-evaluation': {
    icon: '📏', title: 'LLM Evaluation', cat: 'ML / AI Engineering',
    overview: 'If you can\'t measure it, you can\'t improve it. LLM evaluation is uniquely hard because outputs are open-ended text. A mix of automated metrics, LLM-as-judge, and human evaluation is the standard approach.',
    concepts: [
      '<strong>BLEU / ROUGE</strong> — N-gram overlap metrics. BLEU for translation, ROUGE for summarization. Limited for LLMs.',
      '<strong>Perplexity</strong> — How "surprised" the model is. Lower = better language modeling. Doesn\'t measure usefulness.',
      '<strong>LLM-as-judge</strong> — Use a strong LLM to evaluate outputs. Surprisingly effective, scalable.',
      '<strong>RAGAS</strong> — RAG evaluation framework. Measures faithfulness, answer relevancy, context precision/recall.',
      '<strong>Hallucination detection</strong> — Does the output contain facts not in the source? NLI models, factual grounding checks.',
      '<strong>Human evaluation</strong> — Gold standard. Expensive, slow, but catches what metrics miss.',
      '<strong>A/B testing</strong> — Compare model versions on real users. Statistical significance matters.',
      '<strong>Eval datasets</strong> — Curated test sets specific to your use case. Guard against data contamination.',
      '<strong>Guardrails</strong> — Runtime checks: toxicity filtering, PII detection, format validation.',
      '<strong>Regression testing</strong> — Ensure prompt/model changes don\'t break existing good outputs.'
    ],
    qas: [
      { q: 'How do I evaluate a RAG system?', a: 'Use RAGAS or similar: (1) Faithfulness — does the answer match retrieved context? (2) Answer relevancy — does it answer the question? (3) Context precision — are retrieved chunks relevant? (4) Context recall — did we retrieve enough? Build an eval set of queries + expected answers from your domain.' },
      { q: 'Is LLM-as-judge reliable?', a: 'For relative comparisons (A vs B), it correlates well with human judgment (70-80%+). For absolute scoring, less reliable. Biases: positional bias (prefers first option), verbosity bias (prefers longer), self-bias. Use structured rubrics and randomize ordering.' },
      { q: 'How do I detect hallucinations?', a: 'For RAG: check if claims in the output are grounded in retrieved chunks (NLI models can do this). For general: compare against known facts, use another LLM to verify claims. No perfect solution — active research area.' }
    ],
    resources: [
      { name: 'RAGAS documentation', url: 'https://docs.ragas.io/' },
      { name: 'LLM Eval best practices (Hamel)', url: 'https://hamel.dev/blog/posts/evals/' }
    ]
  },
  'ai-safety-guardrails': {
    icon: '🛡️', title: 'AI Safety & Guardrails', cat: 'ML / AI Engineering',
    overview: 'Production LLM systems need guardrails — output filtering, input validation, PII handling, and defense against prompt injection. This is increasingly a must-have skill for AI engineers shipping real products.',
    concepts: [
      '<strong>Prompt injection</strong> — Malicious user input that overrides system instructions. #1 LLM vulnerability.',
      '<strong>Jailbreaking</strong> — Techniques to bypass model safety training (role-playing, encoding tricks).',
      '<strong>PII redaction</strong> — Detect and mask personal data before sending to LLMs. Presidio, custom regex.',
      '<strong>Output filtering</strong> — Check LLM responses for toxicity, harmful content, off-topic responses.',
      '<strong>Input sanitization</strong> — Validate and clean user input. Separate instructions from data.',
      '<strong>Guardrails frameworks</strong> — Guardrails AI, NeMo Guardrails, LlamaGuard.',
      '<strong>Rate limiting</strong> — Prevent abuse and cost overruns. Per-user and per-endpoint.',
      '<strong>Content moderation</strong> — Classify inputs/outputs as safe/unsafe. OpenAI moderation API, Perspective.',
      '<strong>Capability constraints</strong> — Limit what the LLM can do (no code execution, no raw DB access without sandboxing).',
      '<strong>Red teaming</strong> — Proactively test your system with adversarial inputs before launch.'
    ],
    qas: [
      { q: 'How do you defend against prompt injection?', a: '(1) Separate system instructions from user data with delimiters. (2) Don\'t give the LLM access to dangerous tools without confirmation. (3) Validate LLM output before acting on it. (4) Use an input classifier to detect injection attempts. (5) Limit model capabilities. No defense is perfect — defense in depth.' },
      { q: 'Should I send user data to external LLM APIs?', a: 'Depends on your data policy. Options: (1) Redact PII before sending (Presidio). (2) Use enterprise agreements with data processing terms. (3) Self-host open-source models for sensitive data. (4) Use API providers\' data retention opt-outs.' },
      { q: 'What is LlamaGuard?', a: 'An open-source safety classifier from Meta. It classifies prompts and responses against a customizable safety taxonomy (violence, sexual content, self-harm, etc.). You can run it locally before/after your main LLM to filter unsafe content.' }
    ],
    resources: [
      { name: 'OWASP Top 10 for LLM Apps', url: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/' },
      { name: 'Guardrails AI docs', url: 'https://www.guardrailsai.com/docs' }
    ]
  },
  'etl-vs-elt': {
    icon: '🔄', title: 'ETL vs ELT', cat: 'Data Engineering',
    overview: 'ETL (Extract-Transform-Load) and ELT (Extract-Load-Transform) are the two fundamental patterns for moving data. The shift from ETL to ELT reflects the modern reality: storage is cheap, compute is elastic.',
    concepts: [
      '<strong>ETL</strong> — Transform before loading. Data cleaned in a staging area. Traditional approach.',
      '<strong>ELT</strong> — Load raw data first, transform in the warehouse. Modern approach (Snowflake, BigQuery, dbt).',
      '<strong>Extract</strong> — Pull data from sources (APIs, DBs, files, streams). Fivetran, Airbyte, custom scripts.',
      '<strong>Transform</strong> — Clean, enrich, aggregate, join. dbt (SQL-based) or Spark (code-based).',
      '<strong>Load</strong> — Write to destination (warehouse, lake, operational DB).',
      '<strong>CDC (Change Data Capture)</strong> — Track row-level changes in source DB. Debezium + Kafka.',
      '<strong>Batch vs streaming</strong> — Batch: scheduled (hourly/daily). Streaming: near-real-time.',
      '<strong>Idempotency</strong> — Running a pipeline twice produces the same result. Critical for reliability.',
      '<strong>Data contracts</strong> — Schema agreements between producers and consumers. Prevents breaking changes.'
    ],
    qas: [
      { q: 'When would you use ETL over ELT?', a: 'ETL when: data needs to be cleaned/anonymized before landing (compliance), when storage is expensive (on-prem), when the target system has limited compute. ELT is better when your warehouse can handle transformation (Snowflake, BigQuery) and you want raw data preserved.' },
      { q: 'What is Change Data Capture?', a: 'CDC reads the database transaction log to capture every insert, update, and delete. Debezium (open source) streams these changes to Kafka. Benefits: near-real-time replication, minimal load on source DB, full history of changes.' },
      { q: 'How do you make pipelines idempotent?', a: 'Use "delete and replace" for target partitions (not append). Use MERGE/UPSERT with natural keys. Design transforms to be deterministic (same input → same output). Handle late-arriving data with reprocessing windows.' }
    ],
    resources: [
      { name: 'Fundamentals of Data Engineering (O\'Reilly)', url: 'https://www.oreilly.com/library/view/fundamentals-of-data/9781098108298/' },
      { name: 'dbt documentation', url: 'https://docs.getdbt.com/' }
    ]
  },
  'apache-spark': {
    icon: '⚡', title: 'Apache Spark', cat: 'Data Engineering',
    overview: 'Spark is the dominant engine for big data processing. It processes data in-memory across a cluster, making it 10-100x faster than Hadoop MapReduce. DataFrames and Spark SQL are the modern API.',
    concepts: [
      '<strong>RDD</strong> — Resilient Distributed Dataset. Original API. Immutable, distributed collections.',
      '<strong>DataFrame</strong> — Structured data with schema. Optimized by Catalyst engine. Use this.',
      '<strong>Transformations vs Actions</strong> — Transformations are lazy (filter, map, join). Actions trigger execution (count, collect, write).',
      '<strong>Partitioning</strong> — Data split across executors. More partitions = more parallelism (but overhead).',
      '<strong>Shuffling</strong> — Redistributing data across partitions (groupBy, join). Expensive. Minimize it.',
      '<strong>Caching / Persist</strong> — Keep DataFrames in memory for reuse. cache() or persist(MEMORY_AND_DISK).',
      '<strong>Spark SQL</strong> — Write SQL against DataFrames. Same Catalyst optimizer underneath.',
      '<strong>PySpark</strong> — Python API for Spark. Most common in data engineering.',
      '<strong>Broadcast join</strong> — Send small table to all executors. Avoids shuffle for small-large joins.',
      '<strong>Cluster manager</strong> — YARN, Kubernetes, or Standalone. Allocates resources.'
    ],
    qas: [
      { q: 'When is Spark overkill?', a: 'When your data fits in memory on a single machine (under ~50GB). Pandas, DuckDB, or Polars will be faster and simpler. Spark\'s overhead only pays off at scale.' },
      { q: 'How do you optimize a slow Spark job?', a: '(1) Check for data skew. (2) Minimize shuffles. (3) Broadcast small tables in joins. (4) Cache intermediate results that are reused. (5) Increase parallelism. (6) Check Spark UI for stages and tasks.' },
      { q: 'What\'s the difference between client and cluster deploy mode?', a: 'Client mode: driver runs on your local machine (good for dev). Cluster mode: driver runs on a cluster node (good for production). Always use cluster mode for scheduled production jobs.' }
    ],
    resources: [
      { name: 'Learning Spark 2nd Edition', url: 'https://www.oreilly.com/library/view/learning-spark-2nd/9781492050032/' },
      { name: 'Spark documentation', url: 'https://spark.apache.org/docs/latest/' }
    ]
  },
  'airflow-prefect-dagster': {
    icon: '🌬️', title: 'Airflow / Prefect / Dagster', cat: 'Data Engineering',
    overview: 'Orchestrators schedule and manage data pipelines as DAGs (Directed Acyclic Graphs). Airflow dominates the market, but Prefect and Dagster offer modern alternatives with better developer experience.',
    concepts: [
      '<strong>DAG</strong> — Directed Acyclic Graph. Tasks with dependencies. No cycles allowed.',
      '<strong>Operator (Airflow)</strong> — A single task unit. PythonOperator, BashOperator, SQLOperator, etc.',
      '<strong>Scheduler</strong> — Triggers DAGs based on cron schedules or external events.',
      '<strong>Sensors</strong> — Wait for external conditions (file appears, API responds, partition ready).',
      '<strong>XCom (Airflow)</strong> — Pass data between tasks. Keep it small (metadata, not datasets).',
      '<strong>Retries + SLAs</strong> — Auto-retry failed tasks. Alert when DAGs miss their SLA.',
      '<strong>Backfill</strong> — Rerun past DAG runs for historical data. Essential for corrections.',
      '<strong>Prefect</strong> — Python-native, no DAG files. Flows, tasks, built-in retries, cloud UI.',
      '<strong>Dagster</strong> — Software-defined assets. Type checking, testing, materialization, IO managers.',
      '<strong>Airflow 2.x</strong> — TaskFlow API (decorators), dynamic task mapping, better UI.'
    ],
    qas: [
      { q: 'Airflow vs Prefect vs Dagster — how to choose?', a: 'Airflow: largest ecosystem, most jobs list it, proven at scale. Prefect: best DX, easy cloud, good for smaller teams. Dagster: asset-centric, great testing, strong for analytics engineering. If in doubt, learn Airflow — it\'s what most job listings require.' },
      { q: 'What\'s task-centric vs asset-centric orchestration?', a: 'Task-centric (Airflow): you define "do X, then Y, then Z" — you think in verbs. Asset-centric (Dagster): you define "I want table A, which depends on tables B and C" — you think in nouns. Asset-centric makes lineage and freshness tracking more natural.' },
      { q: 'How do you test Airflow DAGs?', a: 'Unit test individual task functions. Test DAG structure: load DAG, assert task dependencies. Integration test with a local Airflow instance + test DB. Use DagBag to validate DAG parsing without running tasks.' }
    ],
    resources: [
      { name: 'Apache Airflow docs', url: 'https://airflow.apache.org/docs/' },
      { name: 'Dagster docs', url: 'https://docs.dagster.io/' }
    ]
  },
  'data-warehousing': {
    icon: '🏔️', title: 'Data Warehousing', cat: 'Data Engineering',
    overview: 'Data warehouses are optimized for analytical queries (OLAP) — columnar storage, massive parallelism, and SQL interfaces. Snowflake, BigQuery, and Redshift dominate the market.',
    concepts: [
      '<strong>OLAP vs OLTP</strong> — OLAP: analytical queries (aggregations, scans). OLTP: transactional (inserts, updates).',
      '<strong>Columnar storage</strong> — Store by column, not row. Compression-friendly, fast for aggregations.',
      '<strong>Star schema</strong> — Fact table (events/measures) surrounded by dimension tables (who/what/where/when).',
      '<strong>Snowflake schema</strong> — Normalized dimensions (dimensions have sub-dimensions). More joins.',
      '<strong>Slowly Changing Dimensions (SCD)</strong> — How to handle dimension changes. Type 1 (overwrite), Type 2 (new row + history).',
      '<strong>Snowflake (platform)</strong> — Separated compute + storage. Virtual warehouses, time travel, zero-copy clones.',
      '<strong>BigQuery</strong> — Google\'s serverless warehouse. No cluster management. Slot-based pricing.',
      '<strong>Redshift</strong> — AWS warehouse. Provisioned clusters or Serverless. Sort keys, dist keys.',
      '<strong>Materialized views</strong> — Pre-computed query results. Fast reads, stale unless refreshed.',
      '<strong>Partitioning & Clustering</strong> — Organize data to skip irrelevant blocks during queries.'
    ],
    qas: [
      { q: 'Star schema vs normalized — which is better for analytics?', a: 'Star schema wins for analytics: fewer joins, simpler queries, better BI tool compatibility. Normalized is better for OLTP. In modern cloud warehouses, star schema remains the standard for analytics.' },
      { q: 'Snowflake vs BigQuery vs Redshift — how to choose?', a: 'Snowflake: cloud-agnostic, best for multi-cloud, great data sharing. BigQuery: serverless (zero admin), best for GCP-heavy orgs. Redshift: best for AWS-heavy orgs. All three are excellent — the cloud you\'re already on often decides.' },
      { q: 'What is a Slowly Changing Dimension Type 2?', a: 'When a dimension value changes (customer moves cities), you add a NEW row with the new value + effective date range, and close the old row. This preserves history — you can report on "where was the customer when they placed this order?"' }
    ],
    resources: [
      { name: 'Kimball Group (dimensional modeling)', url: 'https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/dimensional-modeling-techniques/' },
      { name: 'Snowflake documentation', url: 'https://docs.snowflake.com/' }
    ]
  },
  'lakes-vs-lakehouses': {
    icon: '🏠', title: 'Lakes vs Lakehouses', cat: 'Data Engineering',
    overview: 'Data lakes (S3/GCS) store raw files cheaply but lack structure. Lakehouses (Delta Lake, Apache Iceberg) add ACID transactions and schema enforcement on top of object storage — the best of both worlds.',
    concepts: [
      '<strong>Data lake</strong> — Store everything as files (Parquet, JSON, CSV) on object storage (S3, GCS). Schema-on-read.',
      '<strong>Pain of lakes</strong> — No ACID, no schema enforcement, small file problem, hard to delete/update.',
      '<strong>Lakehouse</strong> — Table format on top of object storage. ACID, schema enforcement, time travel.',
      '<strong>Delta Lake</strong> — Databricks\' format. Transaction log (_delta_log). Most popular in Spark ecosystem.',
      '<strong>Apache Iceberg</strong> — Open standard. Vendor-neutral, hidden partitioning, metadata-heavy. Growing fast.',
      '<strong>Apache Hudi</strong> — Optimized for upserts and incremental processing. Used at Uber.',
      '<strong>Schema-on-read vs schema-on-write</strong> — Lakes: interpret on read. Warehouses/lakehouses: enforce on write.',
      '<strong>Time travel</strong> — Query data as it was at a point in time. Great for auditing and debugging.',
      '<strong>Small file problem</strong> — Too many small files = slow queries. Compact with OPTIMIZE/bin-packing.',
      '<strong>Databricks</strong> — Commercial platform built on Spark + Delta Lake.'
    ],
    qas: [
      { q: 'When would I use a lakehouse over a traditional warehouse?', a: 'When you have diverse data types, want open formats (avoid vendor lock-in), need ML teams to access raw data, or want to unify batch and streaming. Warehouses still win for pure SQL analytics and BI.' },
      { q: 'Delta Lake vs Iceberg — which should I learn?', a: 'Both are converging in features. Delta is dominant in Databricks/Spark shops. Iceberg is gaining momentum due to vendor neutrality (Snowflake, Trino, Spark, Flink all support it). Pick based on your ecosystem.' },
      { q: 'What\'s the small file problem?', a: 'Object storage is optimized for large sequential reads. Thousands of small files means thousands of API calls — much slower than reading one large file. Fix: regularly compact (OPTIMIZE), set minimum file sizes, use partitioning wisely.' }
    ],
    resources: [
      { name: 'Delta Lake documentation', url: 'https://docs.delta.io/' },
      { name: 'Apache Iceberg documentation', url: 'https://iceberg.apache.org/docs/latest/' }
    ]
  },
  'streaming': {
    icon: '🌊', title: 'Streaming', cat: 'Data Engineering',
    overview: 'Streaming processes data continuously as it arrives, rather than in batches. Kafka is the backbone, Flink and Spark Structured Streaming are the processing engines.',
    concepts: [
      '<strong>Event streaming</strong> — Continuous flow of events (clicks, transactions, sensor readings).',
      '<strong>Kafka</strong> — Distributed log. Topics, partitions, consumer groups, offsets. The standard.',
      '<strong>Flink</strong> — True stream processor. Event time, watermarks, exactly-once. The gold standard.',
      '<strong>Spark Structured Streaming</strong> — Micro-batch (or continuous). Easier if you already know Spark.',
      '<strong>Exactly-once semantics</strong> — Each event processed exactly once. Hard. Requires idempotent sinks.',
      '<strong>At-least-once</strong> — Easier. Events may be processed multiple times. Consumer must be idempotent.',
      '<strong>Watermarks</strong> — "I believe all events up to time T have arrived." Triggers late-event handling.',
      '<strong>Windowing</strong> — Tumbling (fixed), sliding (overlapping), session (gap-based). Group events by time.',
      '<strong>Backpressure</strong> — When consumers can\'t keep up with producers. Slow down or buffer.',
      '<strong>Stream-table duality</strong> — A stream is a changelog of a table; a table is a snapshot of a stream.'
    ],
    qas: [
      { q: 'When do I need streaming vs batch?', a: 'Streaming when: latency matters (fraud detection, real-time dashboards, alerts), data is naturally event-driven (IoT, clickstream). Batch when: daily/hourly freshness is fine, aggregations over large windows, ML training. Most orgs need both.' },
      { q: 'What are watermarks in stream processing?', a: 'Watermarks track event-time progress. A watermark of T means "I believe all events with timestamp ≤ T have arrived." Events arriving after are "late." They balance latency (tight watermark) vs completeness (loose watermark).' },
      { q: 'How does Kafka guarantee ordering?', a: 'Ordering is guaranteed within a partition, not across partitions. Messages with the same key go to the same partition (hash partitioning). For user event ordering, use user_id as the key.' }
    ],
    resources: [
      { name: 'Kafka: The Definitive Guide', url: 'https://www.confluent.io/resources/kafka-the-definitive-guide-v2/' },
      { name: 'Flink documentation', url: 'https://nightlies.apache.org/flink/flink-docs-stable/' }
    ]
  },
  'dbt-data-modeling': {
    icon: '🛠️', title: 'dbt & Data Modeling', cat: 'Data Engineering',
    overview: 'dbt (data build tool) transforms data inside your warehouse using SQL. It brings software engineering practices (version control, testing, documentation) to analytics SQL.',
    concepts: [
      '<strong>Models</strong> — SQL SELECT statements saved as .sql files. Each model = one table or view.',
      '<strong>ref()</strong> — Reference other models. Creates dependency graph. dbt handles execution order.',
      '<strong>source()</strong> — Reference raw/source tables. Freshness checks built in.',
      '<strong>Materializations</strong> — table, view, incremental, ephemeral. Balance freshness vs compute cost.',
      '<strong>Tests</strong> — unique, not_null, relationships, accepted_values. Custom tests too.',
      '<strong>Staging → Intermediate → Mart</strong> — Standard layer pattern. Raw → cleaned → business-ready.',
      '<strong>Incremental models</strong> — Only process new/changed rows. Dramatically faster for large tables.',
      '<strong>Macros</strong> — Jinja templates for reusable SQL logic. DRY principle for SQL.',
      '<strong>dbt packages</strong> — Reusable code (dbt_utils, codegen). Install with packages.yml.',
      '<strong>Dimensional modeling</strong> — Facts (events with measures) + dimensions (descriptive attributes).'
    ],
    qas: [
      { q: 'When should I use an incremental model?', a: 'When the source table is large and mostly append-only (events, logs, transactions). Instead of rebuilding the full table, you only process new rows. Trade-off: more complex SQL, needs occasional full refresh.' },
      { q: 'What\'s the staging → intermediate → mart pattern?', a: 'Staging (stg_): 1:1 with source tables. Rename columns, cast types, basic cleaning. Intermediate (int_): Join and transform staging models. Business logic. Marts (fct_/dim_): Final tables for BI tools and analysts.' },
      { q: 'How is dbt different from Airflow?', a: 'Different jobs. dbt transforms data inside the warehouse (SQL-to-SQL). Airflow orchestrates tasks (extract from APIs, trigger dbt runs, send alerts). Many teams use both together.' }
    ],
    resources: [
      { name: 'dbt documentation', url: 'https://docs.getdbt.com/' },
      { name: 'dbt best practices', url: 'https://docs.getdbt.com/best-practices' }
    ]
  },
  'sharding-partitioning': {
    icon: '🔪', title: 'Sharding & Partitioning', cat: 'Distributed Systems',
    overview: 'Sharding splits data across multiple machines. It\'s how databases scale beyond a single node. The hard part: choosing the right shard key and handling cross-shard queries.',
    concepts: [
      '<strong>Horizontal partitioning</strong> — Split rows across shards. Same schema, different data.',
      '<strong>Vertical partitioning</strong> — Split columns. Keep hot columns together.',
      '<strong>Range-based sharding</strong> — Shard by key range (A-M on shard 1, N-Z on shard 2). Supports range queries.',
      '<strong>Hash-based sharding</strong> — hash(key) % num_shards. Even distribution, no range queries.',
      '<strong>Consistent hashing</strong> — Minimizes data movement when adding/removing nodes. Used in Dynamo, Cassandra.',
      '<strong>Hot spots</strong> — One shard gets disproportionate traffic. Bad shard key choice.',
      '<strong>Rebalancing</strong> — Moving data when shards are added/removed. Expensive.',
      '<strong>Cross-shard queries</strong> — Queries that span multiple shards. Expensive scatter-gather.',
      '<strong>Shard key</strong> — The column you shard on. Choose carefully — changing later is extremely painful.',
      '<strong>Directory-based routing</strong> — A lookup service knows which shard has which data.'
    ],
    qas: [
      { q: 'How do you choose a shard key?', a: 'Goals: even data distribution, avoid hot spots, support your most common queries without cross-shard joins. Example: user_id is good if queries are per-user. date is bad if "today" gets all writes. Composite keys can help.' },
      { q: 'What is consistent hashing?', a: 'Nodes and keys are both hashed onto a ring. Each key belongs to the next node clockwise. When a node is added/removed, only nearby keys relocate — not the whole dataset. Virtual nodes improve balance. Used in DynamoDB, Cassandra.' },
      { q: 'When should you NOT shard?', a: 'Exhaust other options first: vertical scaling, read replicas, caching, query optimization, archiving old data. Sharding adds massive complexity. Don\'t shard a 50GB database.' }
    ],
    resources: [
      { name: 'Designing Data-Intensive Applications Ch. 6', url: 'https://dataintensive.net/' },
      { name: 'Vitess (MySQL sharding)', url: 'https://vitess.io/docs/' }
    ]
  },
  'replication': {
    icon: '🪞', title: 'Replication', cat: 'Distributed Systems',
    overview: 'Replication copies data across multiple nodes for availability, durability, and read scaling. The fundamental tradeoff: synchronous (strong consistency, higher latency) vs asynchronous (fast, eventual consistency).',
    concepts: [
      '<strong>Single-leader</strong> — One leader accepts writes, replicates to followers. Most common.',
      '<strong>Multi-leader</strong> — Multiple nodes accept writes. Conflict resolution required.',
      '<strong>Leaderless</strong> — Any node accepts reads/writes. Quorum-based (Dynamo-style).',
      '<strong>Synchronous replication</strong> — Leader waits for follower ack. Strong consistency, slower.',
      '<strong>Asynchronous replication</strong> — Leader doesn\'t wait. Fast writes, followers may lag.',
      '<strong>Replication lag</strong> — Time delay between leader write and follower seeing it.',
      '<strong>Read replicas</strong> — Followers that handle read queries. Scales reads horizontally.',
      '<strong>Failover</strong> — Promote a follower when the leader fails. Can lose un-replicated writes.',
      '<strong>Write-ahead log (WAL)</strong> — Leader writes to log first, then replicates log to followers.',
      '<strong>Conflict resolution</strong> — Multi-leader/leaderless: last-write-wins, vector clocks, CRDTs, app-level merge.'
    ],
    qas: [
      { q: 'What happens when a leader fails?', a: 'Failover: a follower is promoted to new leader. Risks: if using async replication, the new leader may be missing recent writes (data loss). Split-brain if old leader comes back. Solutions: semi-synchronous replication, fencing tokens.' },
      { q: 'When would you use multi-leader replication?', a: 'Multi-datacenter: each DC has a local leader (low-latency writes). Offline-first apps: each device is a "leader" that syncs later. Collaborative editing. The hard part is always conflict resolution.' },
      { q: 'What is quorum-based replication?', a: 'In a system with N replicas, require W writes and R reads such that W + R > N. This guarantees at least one read hits an up-to-date node. Example: N=3, W=2, R=2. Used in DynamoDB and Cassandra.' }
    ],
    resources: [
      { name: 'Designing Data-Intensive Applications Ch. 5', url: 'https://dataintensive.net/' },
      { name: 'Cassandra architecture docs', url: 'https://cassandra.apache.org/doc/latest/cassandra/architecture/' }
    ]
  },
  'eventual-consistency': {
    icon: '⏳', title: 'Eventual Consistency', cat: 'Distributed Systems',
    overview: 'Eventual consistency means all replicas will converge to the same state... eventually. It\'s the default in most distributed databases because strong consistency is expensive.',
    concepts: [
      '<strong>Strong consistency</strong> — Reads always see the most recent write. (Linearizability)',
      '<strong>Eventual consistency</strong> — Given no new writes, all replicas will converge. No timing guarantee.',
      '<strong>Causal consistency</strong> — Preserves cause-and-effect order. Stronger than eventual, weaker than strong.',
      '<strong>Read-your-writes</strong> — A user always sees their own writes. Not guaranteed in eventual systems.',
      '<strong>Monotonic reads</strong> — Once you see a value, you never see an older one.',
      '<strong>CRDTs</strong> — Conflict-free Replicated Data Types. Data structures that merge without coordination.',
      '<strong>Vector clocks</strong> — Track causal history per node. Detect concurrent writes.',
      '<strong>Last-write-wins (LWW)</strong> — Simplest conflict resolution. Based on timestamp. Can lose data.',
      '<strong>Stale reads</strong> — Reading from a lagging replica. Usually fine for timelines, not for banking.',
      '<strong>Tunable consistency</strong> — Some systems let you choose per-query (Cassandra\'s consistency levels).'
    ],
    qas: [
      { q: 'When is eventual consistency acceptable?', a: 'Social feeds (seeing a post 1 second late is fine). Product catalogs (stale inventory count OK for display, verify at checkout). Analytics dashboards. DNS. NOT OK for: bank balances, inventory decrements, seat reservations.' },
      { q: 'What are CRDTs?', a: 'Data structures designed to be merged without conflicts. Examples: G-Counter (grow-only counter), OR-Set (add-wins set), LWW-Register. Used in collaborative editors, distributed caches, offline-first apps. Tradeoff: limited operations and higher memory.' },
      { q: 'How do you provide read-your-writes in an eventually consistent system?', a: 'Options: (1) Always read from the leader for your own data. (2) Track your last write timestamp, route reads to sufficiently fresh replicas. (3) Sticky sessions. (4) Quorum reads (R + W > N).' }
    ],
    resources: [
      { name: 'Designing Data-Intensive Applications Ch. 5, 9', url: 'https://dataintensive.net/' },
      { name: 'CRDTs overview', url: 'https://lars.hupel.info/topics/crdt/01-intro/' }
    ]
  },
  'distributed-transactions': {
    icon: '🔗', title: 'Distributed Transactions', cat: 'Distributed Systems',
    overview: 'Distributed transactions coordinate changes across multiple services or databases. Notoriously hard. Two-phase commit (2PC) is the classic approach; the Saga pattern is the modern microservices alternative.',
    concepts: [
      '<strong>2PC (Two-Phase Commit)</strong> — Coordinator asks all participants to prepare, then commit/abort. Blocking if coordinator fails.',
      '<strong>3PC</strong> — Adds a pre-commit phase. Non-blocking but rarely used (complex).',
      '<strong>Saga pattern</strong> — Sequence of local transactions with compensating actions for rollback.',
      '<strong>Choreography sagas</strong> — Each service publishes events, next service reacts. Decentralized.',
      '<strong>Orchestration sagas</strong> — Central coordinator tells each service what to do. Easier to track.',
      '<strong>Compensating transactions</strong> — Undo a completed step (refund payment, cancel order).',
      '<strong>Idempotency</strong> — Critical for retries in distributed transactions. Use idempotency keys.',
      '<strong>Outbox pattern</strong> — Write to business table + outbox table in one local transaction. Publisher reads outbox.',
      '<strong>XA transactions</strong> — Protocol for distributed transactions across databases.',
      '<strong>Best effort</strong> — Try all operations, accept some may fail. Simplest for non-critical flows.'
    ],
    qas: [
      { q: 'Why not just use 2PC everywhere?', a: '2PC is blocking: if the coordinator crashes after prepare but before commit, all participants hold locks and wait. Performance is bad. Doesn\'t scale to many participants. Most microservices architectures prefer sagas.' },
      { q: 'How does the Saga pattern handle failures?', a: 'Forward recovery: retry the failed step (with idempotency). Backward recovery: execute compensating transactions for completed steps in reverse order. Not all operations are easily compensatable.' },
      { q: 'What is the outbox pattern?', a: 'Problem: you need to update a DB AND publish an event. Either can fail independently. Solution: write the event to an "outbox" table in the same DB transaction as your business write. A separate process (CDC or polling) reads the outbox and publishes to the message broker.' }
    ],
    resources: [
      { name: 'Microservices Patterns (Saga)', url: 'https://microservices.io/patterns/data/saga.html' },
      { name: 'Designing Data-Intensive Applications Ch. 9', url: 'https://dataintensive.net/' }
    ]
  },
  'leader-election': {
    icon: '👑', title: 'Leader Election', cat: 'Distributed Systems',
    overview: 'Leader election picks one node to coordinate in a distributed system. Essential for databases, schedulers, and consensus protocols.',
    concepts: [
      '<strong>Why elect a leader?</strong> — Coordination, writes routing, task assignment, avoiding conflicts.',
      '<strong>ZooKeeper</strong> — Distributed coordination service. Ephemeral nodes for leader election.',
      '<strong>etcd</strong> — Key-value store for distributed coordination. Used by Kubernetes. Raft-based.',
      '<strong>Consul</strong> — Service mesh + KV store + leader election. HashiCorp.',
      '<strong>Bully algorithm</strong> — Highest-ID node wins. Simple, but chatty during elections.',
      '<strong>Ring algorithm</strong> — Election message circulates ring. Node with highest ID becomes leader.',
      '<strong>Lease-based</strong> — Leader holds a time-limited lease. Must renew before expiry.',
      '<strong>Fencing tokens</strong> — Monotonically increasing token given to each new leader. Prevents stale leader.',
      '<strong>Split-brain</strong> — Two nodes both think they\'re the leader. Must be prevented.',
      '<strong>Heartbeats</strong> — Leader sends periodic heartbeats. Followers trigger election on timeout.'
    ],
    qas: [
      { q: 'How does leader election work in Kubernetes?', a: 'K8s uses a leader election mechanism built on etcd (or a Lease resource). One pod acquires a lock (lease). Others check the lock. If the leader fails to renew before TTL, another pod acquires it.' },
      { q: 'What is split-brain and how do you prevent it?', a: 'After a network partition, each side elects its own leader. Both accept writes → data diverges. Prevention: quorum-based election (need majority). Fencing: storage layer rejects writes from stale fencing tokens.' },
      { q: 'ZooKeeper vs etcd — when to use each?', a: 'etcd: simpler, Raft-based, used by Kubernetes natively. ZooKeeper: battle-tested at massive scale (Kafka, HBase). If in the K8s ecosystem, use etcd. If in Hadoop/Kafka ecosystem, ZooKeeper.' }
    ],
    resources: [
      { name: 'Designing Data-Intensive Applications Ch. 8', url: 'https://dataintensive.net/' },
      { name: 'etcd documentation', url: 'https://etcd.io/docs/' }
    ]
  },
  'security-basics': {
    icon: '🔐', title: 'Security Basics', cat: 'Security Deep-Dive',
    overview: 'The OWASP Top 10 is the starting point for web security. SQL injection, XSS, CSRF, and broken authentication cause most breaches. Every developer should understand these.',
    concepts: [
      '<strong>SQL Injection</strong> — Attacker inserts SQL via user input. Fix: parameterized queries, NEVER string concat.',
      '<strong>XSS (Cross-Site Scripting)</strong> — Inject malicious scripts into web pages. Fix: escape output, CSP headers.',
      '<strong>CSRF</strong> — Trick user into making unwanted requests. Fix: CSRF tokens, SameSite cookies.',
      '<strong>Broken Authentication</strong> — Weak passwords, missing MFA, session fixation.',
      '<strong>IDOR</strong> — User accesses another user\'s data by changing an ID. Fix: authorization checks on every request.',
      '<strong>Hashing</strong> — One-way function. bcrypt/argon2 for passwords. NEVER MD5/SHA1 for passwords.',
      '<strong>JWT</strong> — JSON Web Token. Self-contained auth token. Verify signature, check expiry.',
      '<strong>CORS</strong> — Browser security. Server declares which origins can access its resources.',
      '<strong>HTTPS</strong> — TLS encryption for all traffic. No exceptions. HSTS prevents downgrade.',
      '<strong>Principle of least privilege</strong> — Give users and services only the permissions they need.'
    ],
    qas: [
      { q: 'How does SQL injection work?', a: 'If code builds SQL by concatenating user input, an attacker can input \' OR 1=1 -- to bypass auth or extract all data. Fix: always use parameterized queries / prepared statements.' },
      { q: 'What\'s the difference between authentication and authorization?', a: 'Authentication = who are you? (login). Authorization = what can you do? (permissions). You can be authenticated but not authorized. Many "auth" bugs are actually authorization failures (IDOR, missing role checks).' },
      { q: 'How should I store passwords?', a: 'Hash with bcrypt, scrypt, or argon2id. These are intentionally slow and include salt automatically. NEVER use MD5, SHA-1, or SHA-256 alone. NEVER store plaintext. NEVER encrypt passwords — hash them.' }
    ],
    resources: [
      { name: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/' },
      { name: 'PortSwigger Web Security Academy (free)', url: 'https://portswigger.net/web-security' }
    ]
  },
  'tls-ssl': {
    icon: '🔒', title: 'TLS / SSL', cat: 'Security Deep-Dive',
    overview: 'TLS (Transport Layer Security) encrypts all communication over the internet. Every HTTPS connection uses it. Understanding the handshake, certificates, and cipher suites is essential.',
    concepts: [
      '<strong>TLS handshake</strong> — Client hello → Server hello + cert → Key exchange → Encrypted session.',
      '<strong>Certificate</strong> — Server\'s identity card signed by a Certificate Authority (CA). X.509 format.',
      '<strong>CA (Certificate Authority)</strong> — Trusted entity that signs certificates. Let\'s Encrypt, DigiCert.',
      '<strong>Certificate chain</strong> — Server cert → intermediate CA → root CA. Browser trusts root CAs.',
      '<strong>Cipher suite</strong> — Combo of key exchange + bulk cipher + MAC.',
      '<strong>Perfect Forward Secrecy (PFS)</strong> — Each session uses a unique key. Past sessions stay safe if server key leaks.',
      '<strong>mTLS</strong> — Mutual TLS. Both client and server authenticate with certificates.',
      '<strong>TLS 1.3</strong> — Faster handshake (1 round trip vs 2). Removed weak ciphers.',
      '<strong>SNI</strong> — Server Name Indication. Client tells server which hostname it wants.',
      '<strong>SSL is dead</strong> — SSL 3.0 has known vulnerabilities. Always use TLS 1.2+.'
    ],
    qas: [
      { q: 'Walk through the TLS 1.3 handshake.', a: 'Client Hello: supported ciphers + key share. Server Hello: chosen cipher + key share + certificate. Client verifies cert chain, both derive session keys. Done in 1 round trip (1-RTT). Ephemeral key exchange for forward secrecy.' },
      { q: 'What is mTLS and when is it used?', a: 'Mutual TLS = both sides present certificates. Standard TLS: only server proves identity. Used in: service mesh communication (Istio, Linkerd), zero-trust architectures, IoT device authentication.' },
      { q: 'How does Let\'s Encrypt work?', a: 'Free, automated CA. You prove you own a domain (HTTP or DNS challenge). Let\'s Encrypt signs a 90-day certificate. Certbot auto-renews. Eliminated cost and complexity as excuses for not using HTTPS.' }
    ],
    resources: [
      { name: 'How HTTPS Works (comic)', url: 'https://howhttps.works/' },
      { name: 'TLS 1.3 overview (Cloudflare)', url: 'https://www.cloudflare.com/learning/ssl/what-happens-in-a-tls-handshake/' }
    ]
  },
  'zero-trust': {
    icon: '🚫', title: 'Zero Trust', cat: 'Security Deep-Dive',
    overview: 'Zero Trust assumes no user, device, or network is inherently trustworthy. Every request must be authenticated and authorized. Replaces the traditional "castle and moat" model.',
    concepts: [
      '<strong>Core principle</strong> — Never trust, always verify. No implicit trust based on network location.',
      '<strong>Identity-aware proxy</strong> — Authenticate users before they reach any internal service.',
      '<strong>BeyondCorp</strong> — Google\'s zero-trust model. Access based on user + device + context, not VPN.',
      '<strong>Micro-segmentation</strong> — Network divided into small zones with individual access rules.',
      '<strong>Least privilege</strong> — Users and services get minimum required permissions.',
      '<strong>Continuous verification</strong> — Re-verify on every request or periodically.',
      '<strong>Device trust</strong> — Is the device managed, patched, encrypted? Factor into access decisions.',
      '<strong>Context-aware access</strong> — Location, time, behavior patterns influence access decisions.',
      '<strong>Service mesh</strong> — mTLS between all services. No plaintext internal traffic.',
      '<strong>VPN is not enough</strong> — VPN gives full network access once connected. Zero Trust is more granular.'
    ],
    qas: [
      { q: 'How is zero trust different from using a VPN?', a: 'VPN: once you\'re on the network, you can reach everything. Zero Trust: every access request is individually authenticated and authorized. If an attacker compromises one service, they can\'t laterally move.' },
      { q: 'How do you implement zero trust incrementally?', a: '(1) Strong identity (SSO + MFA). (2) Device posture checks. (3) Identity-aware proxy for internal apps. (4) mTLS between services. (5) Micro-segmentation. Each step reduces risk.' },
      { q: 'What is BeyondCorp?', a: 'Google\'s internal zero-trust implementation. Employees access tools based on identity and device trust level — no VPN needed. Access decisions consider: who you are, what device, is it patched, what are you accessing, from where.' }
    ],
    resources: [
      { name: 'Google BeyondCorp papers', url: 'https://cloud.google.com/beyondcorp' },
      { name: 'NIST Zero Trust Architecture', url: 'https://csrc.nist.gov/publications/detail/sp/800-207/final' }
    ]
  },
  'secrets-management': {
    icon: '🗝️', title: 'Secrets Management', cat: 'Security Deep-Dive',
    overview: 'Secrets — API keys, database passwords, certificates — must never be hardcoded, committed to git, or shared in plaintext. A dedicated secrets management system is essential.',
    concepts: [
      '<strong>HashiCorp Vault</strong> — Industry standard. Dynamic secrets, encryption-as-a-service, audit logs.',
      '<strong>AWS Secrets Manager</strong> — Managed. Auto-rotation for RDS passwords.',
      '<strong>AWS Parameter Store</strong> — Simpler/cheaper. Good for config + secrets.',
      '<strong>Sealed Secrets</strong> — Kubernetes: encrypt secrets in git, only the cluster can decrypt.',
      '<strong>SOPS</strong> — Mozilla\'s tool. Encrypt values in YAML/JSON, commit encrypted files.',
      '<strong>KMS</strong> — Managed encryption keys. AWS KMS, GCP Cloud KMS, Azure Key Vault.',
      '<strong>Rotation</strong> — Regularly change secrets. Automated rotation reduces risk.',
      '<strong>Never in git</strong> — Even private repos. Scan with git-secrets, truffleHog, gitleaks.',
      '<strong>Principle: secrets ≠ config</strong> — Config can be in env vars. Secrets need encryption + access control.',
      '<strong>Least privilege access</strong> — Each service gets only the secrets it needs. Audit access.'
    ],
    qas: [
      { q: 'I found a secret committed to git — what do I do?', a: '(1) Immediately rotate the secret. (2) Remove from git history (BFG Repo-Cleaner). (3) If pushed to public repo, treat as fully exposed. (4) Add pattern to .gitignore and pre-commit hook. (5) Audit logs for unauthorized use.' },
      { q: 'Vault vs AWS Secrets Manager?', a: 'Vault: multi-cloud, advanced features (dynamic secrets, PKI), but you manage infra. AWS Secrets Manager: fully managed, easy RDS integration, but AWS-only. If all-in on AWS, Secrets Manager. If multi-cloud, Vault.' },
      { q: 'How do Kubernetes Sealed Secrets work?', a: 'A controller in the cluster holds a private key. You encrypt secrets with the cluster\'s public key locally. The encrypted SealedSecret YAML is safe to commit to git. Only the cluster can decrypt.' }
    ],
    resources: [
      { name: 'HashiCorp Vault docs', url: 'https://developer.hashicorp.com/vault/docs' },
      { name: 'AWS Secrets Manager docs', url: 'https://docs.aws.amazon.com/secretsmanager/' }
    ]
  },
  'sast-dast-sca': {
    icon: '🔍', title: 'SAST / DAST / SCA', cat: 'Security Deep-Dive',
    overview: 'Application security testing at three levels: static analysis of code (SAST), dynamic testing of running apps (DAST), and scanning dependencies for known vulnerabilities (SCA).',
    concepts: [
      '<strong>SAST</strong> — Static Application Security Testing. Scans source code without running it.',
      '<strong>DAST</strong> — Dynamic Application Security Testing. Tests running application from outside.',
      '<strong>SCA</strong> — Software Composition Analysis. Scans dependencies for known CVEs.',
      '<strong>IAST</strong> — Interactive. Agent inside app observes during testing.',
      '<strong>Semgrep</strong> — Fast, customizable SAST. Pattern-based rules. Great DX.',
      '<strong>SonarQube</strong> — SAST + code quality. Self-hosted or cloud.',
      '<strong>Snyk</strong> — SCA leader. Scans npm, pip, Maven, Docker images.',
      '<strong>Trivy</strong> — Open-source. Scans containers, filesystems, git repos.',
      '<strong>Shift left</strong> — Find security issues early (in IDE, at PR) rather than late (in production).',
      '<strong>CVE</strong> — Common Vulnerabilities and Exposures. Standardized vulnerability IDs.'
    ],
    qas: [
      { q: 'SAST vs DAST — which should I use?', a: 'Both. SAST catches issues early (in code, at PR time). DAST catches runtime issues (auth bypass, config problems). SCA is non-negotiable — most vulnerabilities come from dependencies, not your code.' },
      { q: 'How do you integrate security scanning into CI/CD?', a: 'PR time: SAST + SCA — block PRs with critical findings. Build time: container image scanning. Staging: DAST. Start with critical/high severity only or teams will bypass the checks.' },
      { q: 'My SCA tool found 200 vulnerabilities — now what?', a: 'Prioritize: (1) Is it reachable? (2) Severity (CVSS). (3) Exploitability. (4) Is there a fix? Focus on critical + high + reachable first. Many CVEs in transitive dependencies are not actually exploitable.' }
    ],
    resources: [
      { name: 'Semgrep documentation', url: 'https://semgrep.dev/docs/' },
      { name: 'Snyk vulnerability database', url: 'https://security.snyk.io/' }
    ]
  },
  'container-security': {
    icon: '🏰', title: 'Container Security', cat: 'Security Deep-Dive',
    overview: 'Containers share the host kernel — a vulnerability can compromise the entire host. Securing containers means securing images, runtime, and orchestration.',
    concepts: [
      '<strong>Image scanning</strong> — Scan for CVEs in base images and packages. Trivy, Grype, Snyk Container.',
      '<strong>Minimal base images</strong> — Use distroless, Alpine, or scratch. Fewer packages = fewer vulnerabilities.',
      '<strong>Non-root user</strong> — Never run containers as root. USER directive in Dockerfile.',
      '<strong>Read-only filesystem</strong> — Mount container filesystem as read-only. Prevents malware writes.',
      '<strong>No privileged mode</strong> — --privileged gives near-host-level access. Almost never needed.',
      '<strong>Resource limits</strong> — Set CPU/memory limits. Prevents DoS from runaway containers.',
      '<strong>Network policies</strong> — In K8s, restrict pod-to-pod communication. Default deny, explicit allow.',
      '<strong>Pod Security Standards</strong> — K8s: Privileged, Baseline, Restricted. Enforce at namespace level.',
      '<strong>Runtime security</strong> — Detect anomalous behavior at runtime. Falco, Sysdig.',
      '<strong>Supply chain</strong> — Sign images (cosign, Notary). Verify provenance before deploying.'
    ],
    qas: [
      { q: 'How do I secure a Docker image?', a: '(1) Use minimal base (distroless or slim). (2) Scan with Trivy in CI. (3) Multi-stage build. (4) Run as non-root. (5) No secrets in image. (6) Pin versions (not :latest). (7) Use .dockerignore. (8) Read-only root filesystem.' },
      { q: 'What is a distroless image?', a: 'A Google-created base image with ONLY your app and runtime dependencies. No shell, no package manager, no OS utilities. Dramatically reduces attack surface. Debugging is harder — use ephemeral debug containers in K8s.' },
      { q: 'How do network policies work in Kubernetes?', a: 'By default, all pods can talk to all pods. NetworkPolicy resources restrict ingress/egress per pod. Requires a supporting CNI plugin (Calico, Cilium). Best practice: default deny all, then explicitly allow needed paths.' }
    ],
    resources: [
      { name: 'Docker security best practices', url: 'https://docs.docker.com/build/building/best-practices/' },
      { name: 'Falco (runtime security)', url: 'https://falco.org/docs/' }
    ]
  },
  'iac-security': {
    icon: '📜', title: 'IaC Security', cat: 'Security Deep-Dive',
    overview: 'Infrastructure as Code can contain misconfigurations — open S3 buckets, overly permissive IAM roles, unencrypted databases. Policy-as-code tools catch these before deployment.',
    concepts: [
      '<strong>Checkov</strong> — Open-source. Scans Terraform, CloudFormation, K8s manifests.',
      '<strong>tfsec</strong> — Terraform-specific scanner. Now part of Trivy.',
      '<strong>OPA (Open Policy Agent)</strong> — General-purpose policy engine. Rego language.',
      '<strong>Sentinel</strong> — HashiCorp\'s policy-as-code for Terraform Enterprise.',
      '<strong>Drift detection</strong> — Detect when actual infra differs from code. terraform plan, driftctl.',
      '<strong>Common misconfigs</strong> — Public S3 buckets, unrestricted security groups, unencrypted storage, overly broad IAM.',
      '<strong>Policy-as-code</strong> — Define security rules in code, enforce in CI/CD.',
      '<strong>Terraform state security</strong> — State contains secrets. Encrypt, restrict access, use remote backend.',
      '<strong>Module scanning</strong> — Third-party Terraform modules may have vulnerabilities. Audit before use.',
      '<strong>Immutable infrastructure</strong> — Replace, don\'t patch. Rebuild from code on every change.'
    ],
    qas: [
      { q: 'How do I secure Terraform state?', a: '(1) Remote backend (S3 + DynamoDB). (2) Encryption at rest (SSE). (3) Restrict access with IAM. (4) Enable versioning. (5) Never commit state to git. (6) Consider Terraform Cloud.' },
      { q: 'How do I integrate IaC security into CI/CD?', a: 'On every PR: terraform plan → pipe to Checkov. Block PRs with critical findings. Allow warnings to proceed with reviewer notification. Pre-commit hooks for local scanning.' },
      { q: 'What is drift and why does it matter?', a: 'Drift = actual infrastructure differs from code. Someone made a manual change. Your code no longer represents reality. Detection: terraform plan shows drift. Prevention: restrict console access, detect drift on a schedule.' }
    ],
    resources: [
      { name: 'Checkov documentation', url: 'https://www.checkov.io/1.Welcome/Quick%20Start.html' },
      { name: 'OPA (Open Policy Agent)', url: 'https://www.openpolicyagent.org/docs/latest/' }
    ]
  },
  'react': {
    icon: '⚛️', title: 'React', cat: 'Frontend & Mobile',
    overview: 'React is the most popular frontend library. Component-based, declarative, with a rich ecosystem. Understanding hooks, state management, and the rendering model is essential.',
    concepts: [
      '<strong>Components</strong> — Reusable UI building blocks. Function components are the modern standard.',
      '<strong>JSX</strong> — JavaScript XML. HTML-like syntax that compiles to React.createElement calls.',
      '<strong>Hooks</strong> — useState, useEffect, useContext, useRef, useMemo, useCallback.',
      '<strong>useState</strong> — Local component state. Triggers re-render on change.',
      '<strong>useEffect</strong> — Side effects (API calls, subscriptions). Runs after render.',
      '<strong>Props</strong> — Data passed from parent to child. Immutable within the child.',
      '<strong>Context</strong> — Pass data through component tree without prop drilling.',
      '<strong>Virtual DOM</strong> — React\'s diffing algorithm. Minimizes real DOM updates.',
      '<strong>Server Components (RSC)</strong> — Render on the server. Zero JS sent to client. Next.js 13+.',
      '<strong>Suspense</strong> — Declarative loading states. Combined with lazy() for code-splitting.'
    ],
    qas: [
      { q: 'When does useEffect run?', a: 'After every render by default. With [a, b]: only when a or b change. With []: only on mount (cleanup on unmount). Common mistake: forgetting dependencies causes stale closures.' },
      { q: 'What\'s the difference between state and props?', a: 'Props: passed from parent, read-only. State: owned by the component, mutable via useState. Both trigger re-renders on change. State is for data that changes; props flow data down.' },
      { q: 'When should you use useMemo and useCallback?', a: 'useMemo: cache expensive computations. useCallback: cache function references (prevents child re-renders via React.memo). Don\'t premature-optimize — use when expensive calculations or stable references are needed.' }
    ],
    resources: [
      { name: 'React official docs', url: 'https://react.dev/' },
      { name: 'React Patterns', url: 'https://reactpatterns.com/' }
    ]
  },
  'vue-angular': {
    icon: '💚', title: 'Vue / Angular', cat: 'Frontend & Mobile',
    overview: 'Vue offers simplicity and progressive adoption. Angular is a full-featured framework with TypeScript, DI, and opinions about everything. Both are excellent alternatives to React.',
    concepts: [
      '<strong>Vue Composition API</strong> — ref(), reactive(), computed(), watch(). Similar to React hooks.',
      '<strong>Vue Options API</strong> — data, methods, computed, watch. Original API. Still works.',
      '<strong>Vue Reactivity</strong> — Proxy-based reactive system. Fine-grained change tracking.',
      '<strong>Vue SFCs</strong> — Single File Components (.vue). Template + script + style in one file.',
      '<strong>Angular Modules</strong> — Organize app into cohesive blocks. NgModules or standalone components.',
      '<strong>Angular DI</strong> — Dependency injection built in. Services injected via constructors.',
      '<strong>Angular RxJS</strong> — Reactive programming with Observables. Steep learning curve, powerful.',
      '<strong>Directives</strong> — Vue: v-if, v-for, v-bind. Angular: *ngIf, *ngFor, [(ngModel)].',
      '<strong>Two-way binding</strong> — v-model (Vue), [(ngModel)] (Angular). Sync input with data.',
      '<strong>Pinia / NgRx</strong> — State management. Pinia (Vue, simple), NgRx (Angular, Redux-like).'
    ],
    qas: [
      { q: 'Vue vs React — when to choose Vue?', a: 'Vue: simpler learning curve, great docs, template-based (familiar for HTML devs), built-in transitions. React: larger ecosystem, more jobs, JSX flexibility, React Native. Vue is popular in Asia and smaller teams; React dominates US enterprise.' },
      { q: 'When would you choose Angular over React/Vue?', a: 'Large enterprise apps with big teams. TypeScript-first. Built-in router, HTTP client, forms, testing. The tradeoff: steep learning curve, verbose. Great for complex enterprise dashboards.' },
      { q: 'What makes Vue\'s reactivity different?', a: 'Vue uses JavaScript Proxies to track which component uses which data. Only components that actually read changed data re-render. React re-renders entire subtrees (mitigated by memo). Vue\'s approach is more precise without manual optimization.' }
    ],
    resources: [
      { name: 'Vue.js documentation', url: 'https://vuejs.org/guide/introduction.html' },
      { name: 'Angular documentation', url: 'https://angular.io/docs' }
    ]
  },
  'state-management': {
    icon: '🗃️', title: 'State Management', cat: 'Frontend & Mobile',
    overview: 'As apps grow, managing shared state becomes the hardest problem. The ecosystem has evolved from Redux\'s boilerplate to simpler solutions like Zustand and server-state libraries like React Query.',
    concepts: [
      '<strong>Local state</strong> — useState/useReducer. Lives in one component. Start here.',
      '<strong>Lifting state up</strong> — Move state to nearest common parent. Gets messy in deep trees.',
      '<strong>Context</strong> — Share state across a subtree. Re-renders all consumers on change.',
      '<strong>Redux</strong> — Single global store, actions, reducers. Predictable but verbose.',
      '<strong>Zustand</strong> — Minimal, hook-based store. No providers, no boilerplate.',
      '<strong>Jotai</strong> — Atomic state management. Bottom-up approach. Fine-grained reactivity.',
      '<strong>React Query / TanStack Query</strong> — Server state management. Caching, refetching, mutations.',
      '<strong>Server state vs client state</strong> — Server state: use React Query. Client state: use local state or Zustand.',
      '<strong>Derived state</strong> — Computed from other state. Don\'t duplicate what you can derive.',
      '<strong>Pinia (Vue)</strong> — Official Vue state management. Simple, TypeScript-friendly.'
    ],
    qas: [
      { q: 'Do I still need Redux?', a: 'Often no. React Query handles server state (80% of what Redux was used for). Zustand handles remaining client state more simply. Redux still makes sense for complex client-side state machines or large existing codebases.' },
      { q: 'React Query vs Redux for API data?', a: 'React Query. It handles caching, background refetching, stale-while-revalidate, optimistic updates, pagination — all things you\'d hand-build in Redux. Use Redux/Zustand only for state that doesn\'t come from a server.' },
      { q: 'How do I choose between Zustand, Jotai, and Redux?', a: 'Zustand: single store, simple API, most apps. Jotai: atomic, fine-grained reactivity. Redux: middleware, devtools, time-travel, large existing codebases.' }
    ],
    resources: [
      { name: 'TanStack Query docs', url: 'https://tanstack.com/query/latest' },
      { name: 'Zustand docs', url: 'https://zustand-demo.pmnd.rs/' }
    ]
  },
  'ssr-vs-csr-vs-ssg': {
    icon: '🖥️', title: 'SSR vs CSR vs SSG', cat: 'Frontend & Mobile',
    overview: 'How and where your app renders determines performance, SEO, and developer experience. Modern frameworks blend all three rendering strategies.',
    concepts: [
      '<strong>CSR</strong> — Browser downloads JS, renders everything. Fast after initial load. Bad SEO.',
      '<strong>SSR</strong> — Server renders HTML per request. Great SEO, fast first paint. Higher server cost.',
      '<strong>SSG</strong> — Pages pre-built at build time. Fastest. For content that doesn\'t change often.',
      '<strong>ISR</strong> — Next.js: regenerate static pages on demand with a revalidation timer.',
      '<strong>Hydration</strong> — Browser takes server HTML and makes it interactive by attaching JS.',
      '<strong>Streaming SSR</strong> — Server sends HTML progressively (React 18 + Suspense). Faster TTFB.',
      '<strong>Edge rendering</strong> — Run SSR at CDN edge nodes. Lowest latency.',
      '<strong>Next.js</strong> — React meta-framework. App Router (RSC + streaming). Industry standard.',
      '<strong>Remix</strong> — React framework focused on web standards, progressive enhancement.',
      '<strong>Astro</strong> — Content-focused. Ships zero JS by default. Island architecture.'
    ],
    qas: [
      { q: 'When should I use SSR vs SSG?', a: 'SSG: content doesn\'t change per user (blog, docs, marketing). SSR: dynamic per user (dashboards, e-commerce with personalization). ISR: content changes but not in real-time (product pages updated hourly).' },
      { q: 'What is hydration and why can it be slow?', a: 'After server sends HTML, the browser must download JS, parse it, and attach event handlers. Solutions: partial hydration (Astro islands), progressive hydration, React Server Components (no hydration needed for server components).' },
      { q: 'Next.js App Router vs Pages Router?', a: 'App Router (new): React Server Components, streaming, nested layouts, server actions. Pages Router (legacy): getServerSideProps, simpler model. New projects should use App Router.' }
    ],
    resources: [
      { name: 'Next.js documentation', url: 'https://nextjs.org/docs' },
      { name: 'Patterns.dev (rendering patterns)', url: 'https://www.patterns.dev/react/rendering-patterns' }
    ]
  },
  'web-performance': {
    icon: '⚡', title: 'Web Performance', cat: 'Frontend & Mobile',
    overview: 'Web performance directly impacts user experience, conversion rates, and SEO. Core Web Vitals are Google ranking factors. Measuring and optimizing these is a key frontend skill.',
    concepts: [
      '<strong>LCP</strong> — Largest Contentful Paint. Time to render largest visible element. Target: < 2.5s.',
      '<strong>INP</strong> — Interaction to Next Paint. Responsiveness. Target: < 200ms.',
      '<strong>CLS</strong> — Cumulative Layout Shift. Visual stability. Target: < 0.1.',
      '<strong>TTFB</strong> — Time to First Byte. Server response time.',
      '<strong>Code splitting</strong> — Load only JS needed for current page. React.lazy() + dynamic import().',
      '<strong>Tree shaking</strong> — Remove unused code from bundles. Requires ES modules.',
      '<strong>Image optimization</strong> — WebP/AVIF formats, lazy loading, srcset, proper sizing.',
      '<strong>Bundle analysis</strong> — Visualize what\'s in your JS bundle. webpack-bundle-analyzer.',
      '<strong>CDN</strong> — Serve static assets from edge nodes near users.',
      '<strong>Caching</strong> — Cache-Control headers, ETags, service workers for offline.'
    ],
    qas: [
      { q: 'How do you improve LCP?', a: '(1) Optimize hero image (proper format, size, preload). (2) Remove render-blocking CSS/JS. (3) Improve TTFB (CDN, caching). (4) Don\'t lazy-load above-the-fold images. (5) Preconnect to required origins. (6) Use SSR/SSG.' },
      { q: 'What causes layout shift (CLS)?', a: 'Images without width/height attributes. Ads injected dynamically. Fonts causing text reflow. Dynamic content inserted above existing content. Fix: set image dimensions, use font-display: swap, reserve space for dynamic content.' },
      { q: 'How do you measure real-world performance?', a: 'Lab tools (Lighthouse, DevTools) for development. Real User Monitoring (RUM) for production: web-vitals library, Google CrUX, Vercel Analytics. RUM matters more — lab conditions don\'t reflect real devices/networks.' }
    ],
    resources: [
      { name: 'web.dev/performance', url: 'https://web.dev/performance' },
      { name: 'Core Web Vitals guide', url: 'https://web.dev/vitals/' }
    ]
  },
  'mobile-architecture': {
    icon: '📱', title: 'Mobile Architecture', cat: 'Frontend & Mobile',
    overview: 'Mobile development has two camps: native (Swift/Kotlin) for maximum performance and cross-platform (React Native/Flutter) for code sharing. Architecture patterns differ from web.',
    concepts: [
      '<strong>iOS (Swift + SwiftUI)</strong> — Apple\'s modern stack. Declarative UI, reactive (Combine).',
      '<strong>Android (Kotlin + Compose)</strong> — Google\'s modern stack. Jetpack Compose for declarative UI.',
      '<strong>React Native</strong> — JavaScript/TypeScript. One codebase, two platforms. New Architecture (Fabric).',
      '<strong>Flutter</strong> — Dart language. Own rendering engine (Skia). Pixel-perfect cross-platform.',
      '<strong>MVVM</strong> — Model-View-ViewModel. Standard mobile architecture.',
      '<strong>Navigation</strong> — Stack-based. Deep linking, tab navigation, modals.',
      '<strong>Offline-first</strong> — Cache data locally, sync when online. SQLite, Realm, Core Data.',
      '<strong>Push notifications</strong> — APNs (iOS), FCM (Android). Backend sends via provider.',
      '<strong>App lifecycle</strong> — Foreground, background, suspended, terminated. Handle transitions.',
      '<strong>App Store vs Play Store</strong> — Different review processes, guidelines, update mechanisms.'
    ],
    qas: [
      { q: 'Native vs cross-platform — how to decide?', a: 'Cross-platform (RN/Flutter): faster development, shared codebase, good for business/content apps, MVPs. Native: best performance, full platform APIs, best UX, needed for hardware-intensive apps. Many companies mix both approaches.' },
      { q: 'React Native vs Flutter — which to learn?', a: 'React Native: leverage JS/React knowledge, larger ecosystem. Flutter: better performance (compiled to native), consistent UI, great tooling. Both are excellent — pick based on your existing skills.' },
      { q: 'What is MVVM in mobile?', a: 'Model: data + business logic. View: UI. ViewModel: bridge holding UI state and actions. The View observes the ViewModel reactively. Separation makes testing easy — test ViewModel without UI.' }
    ],
    resources: [
      { name: 'React Native docs', url: 'https://reactnative.dev/docs/getting-started' },
      { name: 'Flutter documentation', url: 'https://docs.flutter.dev/' }
    ]
  },
  'probability-statistics': {
    icon: '🎲', title: 'Probability & Statistics', cat: 'Math for CS',
    overview: 'Probability and statistics underpin ML, A/B testing, system design (capacity planning), and data analysis. Understanding distributions, Bayes\' theorem, and hypothesis testing is expected.',
    concepts: [
      '<strong>Probability basics</strong> — P(A) = favorable / total. P(A and B) = P(A) × P(B|A).',
      '<strong>Bayes\' Theorem</strong> — P(A|B) = P(B|A) × P(A) / P(B). Update beliefs with new evidence.',
      '<strong>Normal distribution</strong> — Bell curve. 68-95-99.7 rule. Central limit theorem.',
      '<strong>Central Limit Theorem</strong> — Sample means approach normal distribution regardless of underlying distribution.',
      '<strong>Hypothesis testing</strong> — H0 (null), H1 (alternative). p-value, significance level (α = 0.05).',
      '<strong>A/B testing</strong> — Statistical comparison of control vs treatment. Need sufficient sample size.',
      '<strong>Mean, median, mode</strong> — Mean: average. Median: middle (robust to outliers). Mode: most frequent.',
      '<strong>Variance & standard deviation</strong> — Spread of data. σ² = variance, σ = standard deviation.',
      '<strong>Conditional probability</strong> — P(A|B) = probability of A given B occurred.',
      '<strong>Type I / Type II errors</strong> — Type I: false positive. Type II: false negative.'
    ],
    qas: [
      { q: 'Explain Bayes\' Theorem with an example.', a: 'A disease test is 99% accurate. The disease affects 1% of the population. If you test positive, what\'s the probability you\'re sick? P(sick|positive) = 0.99 × 0.01 / (0.99×0.01 + 0.01×0.99) = 50%. The low base rate matters enormously.' },
      { q: 'What sample size do I need for an A/B test?', a: 'Depends on: baseline rate, minimum detectable effect, significance level (0.05), power (0.80). For a 5% baseline and 10% relative lift, you need ~30K per variant. Smaller effects need exponentially more traffic.' },
      { q: 'When is the mean misleading?', a: 'When data is heavily skewed (income, latency). Use median for skewed data. For latency: report p50, p95, p99 — the mean hides the long tail.' }
    ],
    resources: [
      { name: 'Seeing Theory (visual intro)', url: 'https://seeing-theory.brown.edu/' },
      { name: 'Khan Academy — Statistics', url: 'https://www.khanacademy.org/math/statistics-probability' }
    ]
  },
  'linear-algebra': {
    icon: '📐', title: 'Linear Algebra', cat: 'Math for CS',
    overview: 'Linear algebra is the math behind ML, computer graphics, embeddings, and recommendation systems. Vectors, matrices, and their operations are the language of data transformation.',
    concepts: [
      '<strong>Vector</strong> — Ordered list of numbers. Represents a point or direction in N-dimensional space.',
      '<strong>Matrix</strong> — 2D array of numbers. Represents a linear transformation or dataset.',
      '<strong>Dot product</strong> — Sum of element-wise products. Measures similarity between vectors.',
      '<strong>Matrix multiplication</strong> — Compose linear transformations. (m×n) × (n×p) = (m×p).',
      '<strong>Transpose</strong> — Flip rows and columns. A^T.',
      '<strong>Eigenvalues & Eigenvectors</strong> — Av = λv. Directions unchanged by transformation (PCA, PageRank).',
      '<strong>PCA</strong> — Principal Component Analysis. Reduce dimensions by finding max variance directions.',
      '<strong>Orthogonal</strong> — Perpendicular vectors (dot product = 0). Independent dimensions.',
      '<strong>Cosine similarity</strong> — cos(θ) between vectors. Measures direction similarity. Used in embeddings.',
      '<strong>SVD</strong> — Singular Value Decomposition. Foundation of recommendation systems, compression.'
    ],
    qas: [
      { q: 'Why is linear algebra important for ML?', a: 'Neural networks are matrix operations: input × weights + bias. Embeddings are vectors. Attention is matrix multiplication. PCA reduces dimensions. SVD powers recommendations. Every core ML concept is linear algebra.' },
      { q: 'What does cosine similarity measure?', a: 'The cosine of the angle between two vectors. Range: -1 to 1. In embedding space: similar texts → high cosine similarity. Unlike Euclidean distance, it\'s not affected by magnitude — only direction.' },
      { q: 'What are eigenvalues used for in practice?', a: 'PCA: eigenvalues show how much variance each component captures. PageRank: dominant eigenvector of the web graph. Stability analysis. Graph partitioning via spectral clustering.' }
    ],
    resources: [
      { name: '3Blue1Brown — Essence of Linear Algebra', url: 'https://www.3blue1brown.com/topics/linear-algebra' },
      { name: 'MIT 18.06 (Gilbert Strang)', url: 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/' }
    ]
  },
  'discrete-math': {
    icon: '🔢', title: 'Discrete Math', cat: 'Math for CS',
    overview: 'Discrete math is the mathematical foundation of computer science. Graph theory, combinatorics, logic, and set theory underpin algorithms, databases, networking, and formal verification.',
    concepts: [
      '<strong>Set theory</strong> — Union, intersection, complement, subset. Foundation of DB operations.',
      '<strong>Logic</strong> — AND, OR, NOT, implications, quantifiers. Foundation of if/else and SQL WHERE.',
      '<strong>Combinatorics</strong> — Counting. Permutations (order matters), combinations (order doesn\'t).',
      '<strong>Graph theory</strong> — Nodes + edges. Paths, cycles, trees, DAGs, connectivity.',
      '<strong>Trees</strong> — Connected acyclic graph. Binary trees, n-ary trees, spanning trees.',
      '<strong>Recurrence relations</strong> — T(n) = T(n-1) + n. Solve to get Big-O. Master theorem.',
      '<strong>Proof techniques</strong> — Induction, contradiction, pigeonhole principle.',
      '<strong>Modular arithmetic</strong> — Clock arithmetic. hash(x) % n, cryptography, checksums.',
      '<strong>Boolean algebra</strong> — AND, OR, XOR, NOT. Circuit design, bitwise operations.',
      '<strong>Big-O notation</strong> — Formally: f(n) = O(g(n)) if f(n) ≤ c·g(n) for all n > n₀.'
    ],
    qas: [
      { q: 'How are permutations and combinations different?', a: 'Permutations: order matters. "Arrange 3 of 5" = 5!/(5-3)! = 60. Combinations: order doesn\'t. "Choose 3 of 5" = 5!/(3!·2!) = 10.' },
      { q: 'When does graph theory come up in interviews?', a: 'Constantly. BFS/DFS, shortest path (Dijkstra), topological sort, cycle detection, connected components, minimum spanning tree. Social networks, dependencies, and navigation are all graph problems.' },
      { q: 'What is the pigeonhole principle?', a: 'If you have more items than containers, at least one container has multiple items. Proves hash collisions are inevitable when items > buckets.' }
    ],
    resources: [
      { name: 'MIT 6.042J (Mathematics for CS)', url: 'https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/' },
      { name: 'Discrete Mathematics (Rosen)', url: 'https://www.mheducation.com/highered/product/discrete-mathematics-applications-rosen/M9781259676512.html' }
    ]
  },
  'information-theory': {
    icon: '📡', title: 'Information Theory', cat: 'Math for CS',
    overview: 'Information theory, founded by Claude Shannon, quantifies information. Entropy measures uncertainty, and compression exploits redundancy. Foundational for ML, cryptography, and communications.',
    concepts: [
      '<strong>Entropy (H)</strong> — Measure of uncertainty. H = -Σ p(x) log₂ p(x). Fair coin = 1 bit.',
      '<strong>Bit</strong> — Unit of information. One binary decision. log₂(n) bits to represent n outcomes.',
      '<strong>Cross-entropy</strong> — Measures difference between two distributions. The loss function for classification in ML.',
      '<strong>KL Divergence</strong> — Measures how one distribution differs from another. Non-symmetric. Used in VAEs, RLHF.',
      '<strong>Mutual information</strong> — How much knowing X tells you about Y. Used in feature selection.',
      '<strong>Data compression</strong> — Lossless (Huffman, LZ77, gzip). Lossy (JPEG, MP3).',
      '<strong>Channel capacity</strong> — Max rate of reliable communication over a noisy channel.',
      '<strong>Error correction</strong> — Reed-Solomon, Hamming codes. Detect and correct transmission errors.',
      '<strong>Kolmogorov complexity</strong> — Shortest program that produces a string. Incomputable but important.',
      '<strong>Entropy in ML</strong> — Decision tree splits maximize information gain. Cross-entropy loss for training.'
    ],
    qas: [
      { q: 'What is cross-entropy loss and why is it used in ML?', a: 'Cross-entropy measures how well predicted probabilities match true distribution. For classification: -Σ y_true × log(y_pred). Minimizing it = maximizing likelihood of correct predictions. It penalizes confident wrong predictions heavily.' },
      { q: 'How does entropy relate to compression?', a: 'Shannon proved you can\'t compress below the entropy rate. English text has ~1.0-1.5 bits per character (lots of redundancy), so it compresses ~5x from 8-bit ASCII. This is the fundamental limit.' },
      { q: 'What is KL Divergence used for?', a: 'Measures "extra bits" needed to encode data from P using a code for Q. In ML: regularization (VAE loss), RLHF (keep fine-tuned model close to base), model distillation. It\'s asymmetric — KL(P||Q) ≠ KL(Q||P).' }
    ],
    resources: [
      { name: 'Visual Information Theory (colah)', url: 'https://colah.github.io/posts/2015-09-Visual-Information/' },
      { name: 'Elements of Information Theory', url: 'https://www.wiley.com/en-us/Elements+of+Information+Theory%2C+2nd+Edition-p-9780471241959' }
    ]
  },
  'python-deep-dive': {
    icon: '🐍', title: 'Python Deep-Dive', cat: 'Programming Languages',
    overview: 'Python\'s simplicity hides powerful internals. Understanding decorators, generators, the GIL, and async/await separates Python scripters from Python engineers.',
    concepts: [
      '<strong>Decorators</strong> — Functions that wrap other functions. @functools.wraps preserves metadata.',
      '<strong>Generators</strong> — yield pauses execution, returning a lazy iterator. Memory-efficient for large sequences.',
      '<strong>Context Managers</strong> — with statement. __enter__/__exit__ or @contextmanager. Used for file I/O, locks, transactions.',
      '<strong>GIL</strong> — CPython only runs one thread at a time. Use multiprocessing for CPU-bound, threading/asyncio for I/O-bound.',
      '<strong>List Comprehensions</strong> — [x*2 for x in range(10) if x%2==0]. Faster and more readable than manual loops.',
      '<strong>*args / **kwargs</strong> — Variable positional and keyword arguments. Enables flexible APIs.',
      '<strong>Dunder methods</strong> — __init__, __str__, __len__, __eq__, __iter__. Make objects behave like builtins.',
      '<strong>dataclasses</strong> — Auto-generate __init__, __repr__, __eq__ from field annotations. Python 3.7+.',
      '<strong>Type hints</strong> — def greet(name: str) -> str. Not enforced at runtime but checked by mypy.',
      '<strong>asyncio</strong> — Single-threaded concurrency via event loop. async def + await for I/O-bound tasks.'
    ],
    qas: [
      { q: 'When do you use a generator vs a list?', a: 'Generators are lazy — they yield one item at a time without loading everything into memory. Use generators for large datasets, infinite sequences, or pipelines. Lists are better when you need random access, multiple passes, or len().' },
      { q: 'How does Python\'s GIL affect multithreaded code?', a: 'The GIL prevents true parallel execution of Python threads. For CPU-bound work (heavy computation), use multiprocessing to spawn separate processes each with their own GIL. For I/O-bound work (network, disk), threads or asyncio work fine because they release the GIL during waits.' },
      { q: 'What\'s the difference between @staticmethod and @classmethod?', a: '@staticmethod takes no implicit first arg — it\'s a plain function namespaced to the class. @classmethod takes cls as first arg, giving access to the class itself. Use classmethod for alternative constructors (Date.from_string()), staticmethod for utility functions that logically belong to the class.' }
    ],
    resources: [
      { name: 'Fluent Python by Luciano Ramalho', url: 'https://www.oreilly.com/library/view/fluent-python-2nd/9781492056348/' },
      { name: 'Real Python', url: 'https://realpython.com/' }
    ]
  },
  'javascript': {
    icon: '🟨', title: 'JavaScript', cat: 'Programming Languages',
    overview: 'JavaScript is the only language that runs natively in the browser. Its quirks — hoisting, closures, the event loop, prototypal inheritance — are interview favorites and daily gotchas.',
    concepts: [
      '<strong>Event Loop</strong> — Single-threaded. Call stack + event queue + microtask queue. Promise callbacks run before setTimeout callbacks.',
      '<strong>Closures</strong> — A function bundled with its lexical scope. Inner functions access outer variables even after the outer function returns.',
      '<strong>Hoisting</strong> — var declarations are hoisted and initialized to undefined. let/const are hoisted but not initialized (TDZ).',
      '<strong>Prototypal Inheritance</strong> — Objects inherit from other objects via __proto__ chain. class is syntactic sugar.',
      '<strong>this</strong> — Refers to the calling context. Arrow functions inherit this from enclosing scope. bind/call/apply explicitly set it.',
      '<strong>Promises & async/await</strong> — Manage async code. async/await is syntactic sugar over Promises.',
      '<strong>Destructuring</strong> — const { a, b } = obj; const [x, y] = arr. Clean and expressive.',
      '<strong>Spread/Rest</strong> — ... spreads iterables into args or collects remaining items.',
      '<strong>Modules (ESM)</strong> — import/export. Static, tree-shakeable. Different from CommonJS require().',
      '<strong>Optional chaining</strong> — user?.address?.city. Short-circuits to undefined instead of throwing.'
    ],
    qas: [
      { q: 'Explain the event loop.', a: 'JS is single-threaded. When async work completes (timer, fetch), the callback goes into the task queue. The event loop picks it up once the call stack is empty. Microtasks (Promise .then, queueMicrotask) always run before the next task — so Promise callbacks run before setTimeout.' },
      { q: 'What is a closure and why is it useful?', a: 'A closure is a function that remembers its outer scope even after the outer function has returned. Useful for data privacy (module pattern), event handlers that remember context, memoization, and factory functions that generate configured functions.' },
      { q: 'var vs let vs const?', a: 'var is function-scoped and hoisted — avoid it. let is block-scoped and can be reassigned. const is block-scoped and can\'t be reassigned (but the referenced object can still be mutated). Default to const, use let only when you need reassignment.' }
    ],
    resources: [
      { name: 'javascript.info — The Modern JS Tutorial', url: 'https://javascript.info/' },
      { name: 'You Don\'t Know JS (free)', url: 'https://github.com/getify/You-Dont-Know-JS' }
    ]
  },
  'react': {
    icon: '⚛️', title: 'React', cat: 'Frontend & Mobile',
    overview: 'React is a UI library built around components and one-way data flow. Understanding hooks, the reconciler, and state management patterns is what separates React beginners from seniors.',
    concepts: [
      '<strong>Component</strong> — Reusable UI unit. A function component is a function that takes props and returns JSX.',
      '<strong>Props</strong> — Immutable inputs passed from parent to child. Read-only inside the component.',
      '<strong>useState</strong> — Local mutable state. Triggers re-render when updated. Batched in event handlers.',
      '<strong>useEffect</strong> — Side effects after render. Dependency array controls when it runs. Return cleanup function.',
      '<strong>useRef</strong> — Mutable value that doesn\'t trigger re-render. DOM access, storing interval IDs.',
      '<strong>useMemo / useCallback</strong> — Memoize expensive computed values or callbacks to skip recalculation.',
      '<strong>Context API</strong> — Avoid prop drilling. Provide values anywhere in the tree with useContext.',
      '<strong>Reconciliation</strong> — React diffs the virtual DOM and only patches real DOM where things changed.',
      '<strong>Key prop</strong> — Helps reconciler identify list items. Never use array index as key for dynamic lists.',
      '<strong>Server Components (RSC)</strong> — Run on server, zero client JS. Client components opt in with "use client".'
    ],
    qas: [
      { q: 'When does a component re-render?', a: 'When its own state changes, when its props change, or when its parent re-renders (even if props are the same, unless wrapped in React.memo). Context changes trigger re-renders in all consumers of that context.' },
      { q: 'useEffect empty array [] vs no array?', a: '[] = runs once after mount only. No array = runs after every render. [a, b] = runs when a or b change. The cleanup function returned from useEffect runs before the next effect fires and on unmount.' },
      { q: 'How do you avoid unnecessary re-renders?', a: 'React.memo wraps a component to skip re-render if props are shallowly equal. useCallback memoizes functions passed as props. useMemo memoizes expensive computed values. That said, profile first — unnecessary optimization adds complexity.' }
    ],
    resources: [
      { name: 'React Official Docs (react.dev)', url: 'https://react.dev/' },
      { name: 'Josh W. Comeau — React blog', url: 'https://www.joshwcomeau.com/' }
    ]
  },
  'cap-theorem': {
    icon: '🎭', title: 'CAP Theorem', cat: 'Distributed Systems',
    overview: 'CAP Theorem states a distributed system can guarantee at most 2 of: Consistency, Availability, Partition Tolerance. Since network partitions are unavoidable, real systems choose between CP or AP.',
    concepts: [
      '<strong>Consistency</strong> — Every read returns the most recent write or an error. All nodes see the same data.',
      '<strong>Availability</strong> — Every request gets a response (not necessarily the latest data). System stays up.',
      '<strong>Partition Tolerance</strong> — System operates even when nodes can\'t communicate. Non-negotiable in practice.',
      '<strong>Why P is mandatory</strong> — Network failures happen in any distributed system. You can\'t eliminate partitions.',
      '<strong>CP systems</strong> — Sacrifice availability during partition. Return error rather than stale data. HBase, ZooKeeper, etcd, most relational DBs.',
      '<strong>AP systems</strong> — Remain available during partition, return potentially stale data. Cassandra, CouchDB, DynamoDB (default), DNS.',
      '<strong>PACELC</strong> — Extension: even without partitions, there\'s a tradeoff between Latency and Consistency.',
      '<strong>Eventual Consistency</strong> — AP systems guarantee that if no new writes occur, all replicas converge to the same value eventually.'
    ],
    qas: [
      { q: 'Can a system be both consistent and available?', a: 'In the absence of partitions, yes — a single-node system is both CA. But partitions are inevitable in distributed networks, so distributed systems must choose between CP or AP when a partition occurs.' },
      { q: 'Is DynamoDB CP or AP?', a: 'By default AP: eventually consistent reads with high availability. DynamoDB also supports "strongly consistent reads" which makes individual reads CP at the cost of higher latency. Many systems let you tune this per-request.' },
      { q: 'What does eventual consistency mean in practice?', a: 'Writes propagate to all replicas asynchronously — there\'s a window (usually milliseconds to seconds) where nodes have different values. For social media likes, this is fine. For bank balances, it\'s not. Design your system knowing which operations can tolerate staleness.' }
    ],
    resources: [
      { name: 'CAP Theorem — 12 Years Later (Brewer)', url: 'https://www.infoq.com/articles/cap-twelve-years-later-how-the-rules-have-changed/' },
      { name: 'Designing Data-Intensive Applications', url: 'https://dataintensive.net/' }
    ]
  }

};

function openTopic(key) {
  const t = TOPIC_DATA[key];
  if (!t) {
    showComingSoon(key);
    return;
  }
  document.getElementById("m-icon").textContent = t.icon;
  document.getElementById("m-title").textContent = t.title;
  document.getElementById("m-cat").textContent = t.cat;

  let html = "";
  if (t.overview) {
    html += '<div class="modal-section"><div class="modal-h">Overview</div><div class="modal-p">' + t.overview + '</div></div>';
  }
  if (t.concepts && t.concepts.length) {
    html += '<div class="modal-section"><div class="modal-h">Key Concepts</div><ul class="modal-list">';
    t.concepts.forEach(c => html += "<li>" + c + "</li>");
    html += "</ul></div>";
  }
  if (t.qas && t.qas.length) {
    html += '<div class="modal-section"><div class="modal-h">Common Interview Questions</div>';
    t.qas.forEach(qa => {
      html += '<div class="qa-item"><div class="qa-q">Q: ' + qa.q + '</div><div class="qa-a">' + qa.a + '</div></div>';
    });
    html += "</div>";
  }
  if (t.resources && t.resources.length) {
    html += '<div class="modal-section"><div class="modal-h">Learn More</div><div class="modal-resources">';
    t.resources.forEach(r => html += '<a href="' + r.url + '" target="_blank" rel="noopener">' + r.name + '</a>');
    html += "</div></div>";
  }
  document.getElementById("m-body").innerHTML = html;
  document.getElementById("modal").classList.add("show");
  document.body.style.overflow = "hidden";
}

function showComingSoon(key) {
  const card = document.querySelector('[data-topic="' + key + '"]');
  const name = card ? card.querySelector(".topic-name").textContent : "This topic";
  const icon = card ? card.querySelector(".topic-icon").textContent : "📘";
  document.getElementById("m-icon").textContent = icon;
  document.getElementById("m-title").textContent = name;
  document.getElementById("m-cat").textContent = "";
  document.getElementById("m-body").innerHTML =
    '<div class="modal-section"><div class="coming-soon">' +
    '<strong>Deep-dive content coming soon</strong>' +
    'This topic is on the roadmap.' +
    '</div></div>' +
    '<div class="modal-section"><div class="modal-h">Quick Notes</div><div class="modal-p">' +
    (card ? card.querySelector('.topic-desc').textContent : '') +
    '</div></div>';
  document.getElementById("modal").classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modal").classList.remove("show");
  document.body.style.overflow = "";
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".topic-card").forEach(card => {
    const name = card.querySelector(".topic-name").textContent;
    const key = name.toLowerCase()
      .replace(/&/g, "")
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
    card.setAttribute("data-topic", key);
    card.addEventListener("click", () => openTopic(key));
  });
});

// Search
const searchInput = document.getElementById('search-input');
const topicCards = document.querySelectorAll('.topic-card');
const topicsGrid = document.querySelector('.topics-grid');
const noResults = document.createElement('div');
noResults.className = 'no-results';
noResults.textContent = 'No topics match — try a different term.';
if (topicsGrid) topicsGrid.appendChild(noResults);

if (searchInput) {
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    let visible = 0;
    topicCards.forEach(card => {
      const name = card.querySelector('.topic-name')?.textContent.toLowerCase() || '';
      const desc = card.querySelector('.topic-desc')?.textContent.toLowerCase() || '';
      const tags = card.querySelector('.topic-tags')?.textContent.toLowerCase() || '';
      const match = !q || name.includes(q) || desc.includes(q) || tags.includes(q);
      card.classList.toggle('hidden', !match);
      if (match) visible++;
    });
    noResults.classList.toggle('visible', visible === 0 && q.length > 0);
    document.querySelectorAll('.gloss-entry').forEach(entry => {
      const term = entry.querySelector('.gloss-term')?.textContent.toLowerCase() || '';
      const def = entry.querySelector('.gloss-def')?.textContent.toLowerCase() || '';
      entry.classList.toggle('hidden', q.length > 0 && !term.includes(q) && !def.includes(q));
    });
    document.querySelectorAll('.gloss-group').forEach(group => {
      group.classList.toggle('hidden', q.length > 0 && !group.querySelector('.gloss-entry:not(.hidden)'));
    });
    const gnr = document.querySelector('.gloss-no-results');
    if (gnr) gnr.classList.toggle('visible', q.length > 0 && !document.querySelector('.gloss-entry:not(.hidden)'));
  });
}

document.addEventListener("keydown", (e) => {
  const active = document.activeElement;
  const inInput = active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA');

  if (e.key === "Escape") {
    closeModal();
    if (active === searchInput) {
      searchInput.value = '';
      searchInput.dispatchEvent(new Event('input'));
      searchInput.blur();
    }
    return;
  }

  if ((e.key === '/' || (e.ctrlKey && e.key === 'k')) && !inInput) {
    e.preventDefault();
    searchInput?.focus();
    document.getElementById('topics')?.scrollIntoView({ behavior: 'smooth' });
  }
});
