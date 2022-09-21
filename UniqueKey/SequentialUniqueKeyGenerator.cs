using Abp.Dependency;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UniqueKey
{
    public class SequentialUniqueKeyGenerator : IUniqueKey, ITransientDependency
    {
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
    }
}
