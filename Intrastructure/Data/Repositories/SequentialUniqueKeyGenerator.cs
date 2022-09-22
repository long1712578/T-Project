using Abp.Dependency;
using Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Intrastructure.Data.Repositories
{
    public class SequentialUniqueKeyGenerator: IUniqueKey
    {
        private const int NodeIdBits = 10;
        private const int SequenceBits = 12;

        private static readonly int MaxSequence = (int)Math.Pow(2, SequenceBits) - 1;

        private const long CustomEpoch = 1609459200000L;

        private long _lastTimestamp = -1L;
        private long _sequence = 0L;
        public string Create()
        {
            long unixTimestamp = (long)(DateTime.Now.Subtract(new DateTime(2021, 1, 1))).TotalMilliseconds;
            String result = unixTimestamp.ToString();
            int randomSize = 16 - result.Length;
            Random random = new Random();
            string randomString = "";
            for (int i = 0; i < randomSize; i++)
            {
                int temp = random.Next(0, 10);
                randomString = randomString + temp.ToString();
            }
            result = result + randomString;
            return result;
        }
        public string CreateIdGen()
        {
            long id = NextId(0);
            return id.ToString();
        }
        private long NextId(int nodeId)
        {
            long currentTimestamp = Timestamp();

            if (currentTimestamp < _lastTimestamp)
            {
                throw new Exception("Invalid System Clock!");
            }

            if (currentTimestamp == _lastTimestamp)
            {
                _sequence = (_sequence + 1) & MaxSequence;
                if (_sequence == 0)
                {
                    // Sequence Exhausted, wait till next millisecond.
                    currentTimestamp = WaitNextMillis(currentTimestamp);
                }
            }
            else
            {
                // reset sequence to start with zero for the next millisecond
                _sequence = 0;
            }

            _lastTimestamp = currentTimestamp;

            long id = currentTimestamp << (NodeIdBits + SequenceBits);

            id |= (uint)(nodeId << SequenceBits);
            id |= _sequence;
            return id;
        }


        private static long Timestamp()
        {
            return DateTimeOffset.Now.ToUnixTimeMilliseconds() - CustomEpoch;
        }

        private long WaitNextMillis(long currentTimestamp)
        {
            while (currentTimestamp == _lastTimestamp)
            {
                currentTimestamp = Timestamp();
            }
            return currentTimestamp;
        }
    }
}
